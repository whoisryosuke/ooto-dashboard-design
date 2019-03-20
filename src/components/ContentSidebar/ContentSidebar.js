import React from "react";
import styled from "styled-components";

function ContentSidebar({ className, children }) {
  return <aside className={className}><div>{children}</div></aside>;
}

const StyledContentSidebar = styled(ContentSidebar)`
  width: 250px;
  height:calc(100vh - 100px);
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.02);
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 420;

  & > div {
    padding:1em;
  }

  & hr {
    border-color: #EEEEEE;
  }

  & h3 {
    text-transform:uppercase;
    font-size: 14px;
    color: #DCE0E5;
    letter-spacing: 0.4px;
    text-align: left;
  }

  & .accounts ul {
    list-style: none; 
    padding-left: 1em;
  }

  & .accounts li {
    font-size: 11px;
    color: #4A4A4A;
    letter-spacing: 0.64px;
    text-align: left;
    line-height: 28px;
  }
  
  & .accounts ul li::before {
    content: "\\2022";  
    color: #4DA1FF; 
    font-weight: bold; 
    display: inline-block; 
    width: 1em; 
    margin-left: -1em; 
  }
`;

export default StyledContentSidebar;
