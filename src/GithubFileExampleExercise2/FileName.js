import React from "react";
import PropTypes from "prop-types";
import DescriptionIcon from "@material-ui/icons/Description";
import FolderIcon from "@material-ui/icons/Folder";

const FileIcon = ({ file }) => {
  if (file.type === "folder") {
    return (
      <div className="folderIcon">
        <FolderIcon />
      </div>
    );
  } else {
    return (
      <div className="fileIcon">
        <DescriptionIcon />
      </div>
    );
  }
};

const FileName = ({ file }) => (
  <div className="file__Parent">
    <div>
      <FileIcon file={file} />
    </div>
    <div className="file__name">{file.name}</div>
  </div>
);

FileName.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileName;
