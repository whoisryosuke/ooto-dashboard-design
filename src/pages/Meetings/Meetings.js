import React from "react";
import styled from "styled-components";

import Button from "../../components/Button/Button";
import Filters from "../../components/Filters/Filters";
import Kanban from "../../components/Kanban/Kanban";
import KanbanCard from "../../components/KanbanCard/KanbanCard";
import ContentSidebar from "../../components/ContentSidebar/ContentSidebar";

function Meetings({ className }) {
  return (
    <div className={className}>
      <header>
        <div>
          <h1>Meetings</h1>
          <Button primary>+ Create New</Button>
        </div>
        <Filters />
      </header>
      <Kanban>
        <KanbanCard active date="02nd Thursday" />
        <KanbanCard date="02nd Thursday" />
        <KanbanCard date="02nd Thursday" />
      </Kanban>
      <ContentSidebar>
        <section className="Calendar__header">
          <div>
            <div className="icon">
              <svg
                width="26px"
                height="24px"
                viewBox="0 0 26 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="ooto-Productivity-Dashboard"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="ooto-Meetings"
                    transform="translate(-1243.000000, -152.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="side-app---calendar"
                      transform="translate(1188.000000, 101.000000)"
                    >
                      <g id="icon" transform="translate(40.000000, 35.000000)">
                        <path
                          d="M38.218,39.7289565 L17.7808696,39.7289565 C16.222,39.7289565 15,38.2763478 15,36.4224348 L15,21.4306087 C15,19.5766957 15.7008696,18.2574783 17.2608696,18.2574783 L24.0434783,18.2574783 L24.0434783,17.1270435 C24.0434783,16.5188696 24.4131304,16 25.028087,16 C25.6441739,16 26.1426957,16.494 26.1426957,17.1021739 L26.3043478,18.2574783 L29.6956522,18.2574783 L29.8573043,17.1021739 C29.8573043,16.494 30.3558261,16 30.9707826,16 C31.5868696,16 32.0853913,16.494 32.0853913,17.1021739 L31.9565217,18.2574783 L38.7391304,18.2574783 C40.2991304,18.2574783 41,19.5766957 41,21.4306087 L41,36.4224348 C41,38.2763478 39.778,39.7289565 38.218,39.7289565 L38.218,39.7289565 Z M38.218,20.3284348 L32.0853913,20.3284348 L32.0853913,20.776087 C32.0853913,21.3842609 31.4410435,21.6487826 30.826087,21.6487826 C30.21,21.6487826 29.8573043,21.3842609 29.8573043,20.776087 L29.8573043,20.3284348 L26.1426957,20.3284348 L26.1426957,20.776087 C26.1426957,21.3842609 25.7888696,21.6487826 25.173913,21.6487826 C24.5578261,21.6487826 23.9146087,21.3842609 23.9146087,20.776087 L23.9146087,20.3284348 L17.2608696,20.5183478 C17.0664348,20.5183478 17.228087,20.7466957 17.228087,21.4306087 L17.2608696,23.9096522 L38.7391304,23.9096522 L38.771913,21.4306087 C38.771913,20.7466957 38.4135652,20.3284348 38.218,20.3284348 L38.218,20.3284348 Z M38.771913,36.4224348 L38.7391304,26.1705217 L17.2608696,26.1705217 L17.228087,36.4224348 C17.228087,37.1063478 17.0664348,37.4748696 17.2608696,37.4748696 L38.7391304,37.4748696 C38.9335652,37.4748696 38.771913,37.1063478 38.771913,36.4224348 L38.771913,36.4224348 Z M24.0434783,34.0835652 L20.6521739,34.0835652 L20.6521739,30.6922609 C20.6521739,30.2864348 20.5323478,29.5946087 20.9426957,29.5946087 L24.4097391,29.5946087 C24.820087,29.5946087 25.1524348,29.9224348 25.1524348,30.3293913 L25.1524348,33.7568696 C25.1524348,34.1626957 24.4538261,34.0835652 24.0434783,34.0835652 L24.0434783,34.0835652 Z M20.6521739,34.0835652 C20.2418261,34.0835652 20.6521739,33.7557391 20.6521739,34.0835652 L20.6521739,34.0835652 Z"
                          id="calendar-icon"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="title">
            <h2>Calendar</h2>
            <h3>02 March</h3>
          </div>
        </section>
        <section className="calendar" />
        <hr />
        <section className="accounts">
          <h3>Accounts</h3>
          <ul>
            <li>adrian.madacs@gmail.com</li>
            <li>ama@umwelt.dk</li>
          </ul>
          <Button>+ Add Account</Button>
        </section>
      </ContentSidebar>
    </div>
  );
}

const StyledMeetings = styled(Meetings)`
  padding: 3em;
  margin-right: 250px;

  & header h1 {
    font-size: 2em;
    font-weight: normal;
  }

  & > header > div > h1 {
    display: inline-block;
    margin-right: 1.5em;
  }

  & > header {
    display: flex;
    justify-content: space-between;
  }

  & .Calendar__header {
    display: flex;
  }
  & .Calendar__header .icon {
    background: #ffd012;
    box-shadow: 1px 2px 17px 0 rgba(0, 0, 0, 0.07);
    padding: 1.5em;
    margin: 0 1em;
  }
`;

export default StyledMeetings;
