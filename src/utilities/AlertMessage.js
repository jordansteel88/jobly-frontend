import React from "react";
import { Alert } from "reactstrap";

function AlertMessage({ type = "danger", messages = [] }) {
  return (
    <div>
      <Alert className="pb-0 small" color={type}>
        {messages.map(error => (
            <p key={error}>
              {error}
            </p>
        ))}
      </Alert>
    </div>
  );
}

export default AlertMessage;