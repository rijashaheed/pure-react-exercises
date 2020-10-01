import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Time from "./GithubFileExampleExercise2/Time";
import CommitMessage from "./GithubFileExampleExercise2/CommitMessage";
import FileName from "./GithubFileExampleExercise2/FileName";

const FileList = ({ files }) => (
  <table className="fileList">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file}></FileListItem>
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array,
};

const FileListItem = ({ file }) => (
  <tr className="fileList__item">
    <td>
      <FileName file={file} />
    </td>
    <td colspan="2" className="commit__message">
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileList;
