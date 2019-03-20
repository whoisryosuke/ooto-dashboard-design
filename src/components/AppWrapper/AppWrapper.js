import React from "react";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import SearchHeader from "../SearchHeader/SearchHeader";

function AppWrapper({ className, children }) {
  return (
    <div className={className}>
      <Sidebar />
      <main>
        <SearchHeader />
        <section className="content">{children}</section>
      </main>
    </div>
  );
}

const StyledAppWrapper = styled(AppWrapper)`
  background: #fafbfc;

  & > main {
    margin-left: 100px;
    background: #f4f8f9;
  }
  & > .content {
    padding: 3em;
  }
`;

export default StyledAppWrapper;
