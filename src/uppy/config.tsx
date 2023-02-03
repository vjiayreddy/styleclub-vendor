export const uppyInit = {
  id: "uppy",
  autoProceed: true,
  allowMultipleUploadBatches: true,
  debug: true,
  restrictions: {
    maxNumberOfFiles: 2,
  },
  strings: {
    noDuplicates:
      "Cannot add the duplicate file '%{fileName}', it already exists",
    noMoreFilesAllowed: "Cannot add more files",
    timedOut: "Upload stalled for %{seconds} seconds, aborting.",
  },
};
