import React from "react";
import styled from "styled-components";

import KanbanMeeting from "../KanbanMeeting/KanbanMeeting";

function KanbanCard({ active, className, date }) {
  return (
    <div className={className}>
      <h3>{date}</h3>
      <section className="meetings">
        <KanbanMeeting title="Inspiration gathering" date="11:00 AM - 11:30 AM" attachments="10" users={[{name: "AM", color: "blue"}, {name: "KP", color: "yellow"}]} />
        <KanbanMeeting active title="Sketching" date="11:00 AM - 11:30 AM" attachments="3" users={[{name: "AM", color: "blue"}, {name: "KP", color: "yellow"}]} />
        <KanbanMeeting title="Hikoot app Wireframesg" date="11:00 AM - 11:30 AM" attachments="7" users={[{name: "AM", color: "blue"}, {name: "KP", color: "yellow"}]} />
      </section>
    </div>
  );
}

const StyledKanbanCard = styled(KanbanCard)`
  width:300px;
  background: #FFFFFF;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,0.03);
  border-radius:6px;
  padding:1em;
  margin-right:1.5em;

  & > h3 {
    font-size: 16px;
    color: #474F58;
    letter-spacing: 0.13px;
    position:relative;
    margin-bottom:2em;
  }
  & > h3::after {
    content: "";
    bottom:-1em;
    width:${props => props.active ? '150px' : '40px'};
    height:5px;
    background-color:${props => props.active ? '#4DA1FF' : 'rgba(152,152,152,0.20)'};

    display: block;
    position: relative;

    transition:width 400ms ease-out;
  }


`;

export default StyledKanbanCard;
