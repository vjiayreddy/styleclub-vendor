import React from "react";
import Uppy from "@uppy/core";
import { DashboardModal, useUppy, Dashboard } from "@uppy/react";

import ImageEditor from "@uppy/image-editor";
import Aws3 from "@uppy/aws-s3";

import Webcam from "@uppy/webcam";
import Compressor from "@uppy/compressor";
import RemoteSources from "@uppy/google-drive";
import ScreenCapture from "@uppy/screen-capture";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";
import "@uppy/image-editor/dist/style.css";
import "@uppy/screen-capture/dist/style.css";

const UploadFiles = () => {
  const uppy = useUppy(() => {
    const uppy = new Uppy({
      id: "uppy",
      autoProceed: false,
      allowMultipleUploads: false,
      restrictions: {
        maxNumberOfFiles: 3,
        maxFileSize: 20000000, // 20 MB
        allowedFileTypes: null,
      },
      infoTimeout: 5000,
      locale: {
        strings: {},
      },
    })
      .use(Webcam, {
        countdown: true,
        modes: ["video-audio", "video-only", "audio-only", "picture"],
        mirror: false,
        showRecordingLength: true,
      })
      .use(ScreenCapture, {
        displayMediaConstraints: {
          video: {
            width: 1280,
            height: 720,
            frameRate: {
              ideal: 3,
              max: 5,
            },
            cursor: "motion",
            displaySurface: "monitor",
          },
        },
        userMediaConstraints: {
          audio: true,
        },
        preferredVideoMimeType: "video/webm",
      })
      .use(ImageEditor, {
        id: "ImageEditor",
        quality: 0.3,
        cropperOptions: {
          viewMode: 1,
          aspectRatio: 1,
          background: false,
          responsive: true,
          autoCropArea: 0.8,
          autoCrop: true,
        },
        actions: {
          revert: true,
          rotate: true,
          flip: true,
          zoomIn: true,
          zoomOut: true,
          cropSquare: true,
          cropWidescreen: true,
          cropWidescreenVertical: true,
        },
      })
      .use(Aws3, {
        limit: 4,
        companionUrl: "http://localhost:3020",
        
      });

    uppy.setOptions({
      locale: {
        strings: {
          cancel: "Cancel",
          done: "Cancel",
        },
      },
    });

    uppy.on("upload", () => {});
    uppy.on("file-editor:complete", (updatedFile) => {});
    return uppy;
  });

  return (
    <DashboardModal
      note="File size must not exceed 20 MB"
      id="uppy-upload"
      open={true}
      uppy={uppy}
      plugins={["Webcam", "ImageEditor", "ScreenCapture"]}
    />
  );
};

export default UploadFiles;
