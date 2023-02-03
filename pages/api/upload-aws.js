import { S3 } from "aws-sdk";
import { UppyNextS3MultipartEndpoint } from "uppy-next-s3-multipart";

const S3_ACCESS_KEY_ID = "AKIA4MVATJDV43K2CIN7";
const S3_SECRET_ACCESS_KEY = "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";
const S3_BUCKET_NAME = "mpf-public-data";
const S3_REGION = "ap-south-1";
const EXPIRE_TIME_SEC = 1 * 60 * 60;
const s3 = new S3({
  credentials: {
    accessKeyId: S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: S3_SECRET_ACCESS_KEY ?? "",
  },
  region: S3_REGION,
});

export const FilenameGenParams = { prefix: string };

const endpointHandler = new UppyNextS3MultipartEndpoint(
  s3,
  S3_BUCKET_NAME,
  EXPIRE_TIME_SEC,
  // This is used to specify how you would like the file to be named
  // In this example, I am passing a prefix from the client, then adding
  // a year-month folder, then a uuid with the filename appended at the end
  (file, params) => {
    const date = new Date();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${params.prefix}/${year}-${month}/${uuid()}_${file.name}`;
  }
);

export default async function handler(req, res) {
  return endpointHandler.handle(req, res);
}
