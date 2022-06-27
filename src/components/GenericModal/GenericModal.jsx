import React from "react";
import "./GenericModal.sass";

export default function GenericModal({
  title,
  children,
  onContinue,
  onCancel,
}) {
  return (
    <div className="generic_modal_background">
      <div className="generic_modal">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">{children}</div>
        <div className="actions">
          <button
            className="btn btn-sm btn-outline-primary"
            type="button"
            onClick={() => onContinue()}
          >
            Continue
          </button>
          <button
            className="btn btn-sm btn-outline-danger mx-2"
            type="button"
            color="error"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
