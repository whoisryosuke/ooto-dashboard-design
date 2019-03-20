import React from "react";
import styled from "styled-components";

function Button({ className, children }) {
  return <div className={className}>{children}</div>;
}

const StyledButton = styled(Button)`
  font-size: 11px;
  letter-spacing: 0;

  color: ${props => (props.primary ? "#ffffff" : "rgba(77, 161, 255, 0.74)")};
  background: ${props => (props.primary ? "#4da1ff" : "#ffffff")};
  border: 1px solid rgba(77, 161, 255, 0.7);
  border-radius: 2px;
  padding: 0.5em 1em;
  display: inline-block;

  & > svg {
    margin-right: 0.5em;
  }
`;

StyledButton.defaultProps = {
  primary: false
};
export default StyledButton;
