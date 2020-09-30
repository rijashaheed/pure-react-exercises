import React from "react";
import PropTypes from "prop-types";

const Email = ({ email }) => {
  const { sender, subject, date, message } = email;

  return (
    <div className="email">
      <div className="email__sender">{sender}</div>
      <div className="email__subject">{subject}</div>
      <div className="email__date">{date}</div>

      {/* <div className="messsagePart"> */}
      <div className="email__subjectMessage">{subject}</div>
      <div className="email__message">{message}</div>
      {/* </div> */}
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

export default Email;
