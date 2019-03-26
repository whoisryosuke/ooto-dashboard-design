import React from "react";
import styled from "styled-components";

const Option = styled("div")`
  background: ${props => (props.active ? "#FFFFFF" : "none")};
  box-shadow: ${props =>
    props.active ? "0 2px 9px 0 rgba(0,0,0,0.03)" : "none"};
  color: ${props => (props.active ? "#323C47" : "#989898")};
  opacity: ${props => (props.active ? "1" : "0.45")};
  font-size: 13px;
  color: #989898;
  letter-spacing: 0;
  padding: 0.75em 1.75em;
  display: inline-block;
  border-radius: 3px;
`;

const StyledFilter = styled("div")`
  background: rgba(233, 239, 244, 0.48);
  padding: 1em;
  border-radius: 4px;
`;

function Filter() {
  return (
    <nav>
      <StyledFilter>
        <Option active>Day</Option>
        <Option>Week</Option>
        <Option>Month</Option>
      </StyledFilter>
    </nav>
  );
}

export default Filter;
