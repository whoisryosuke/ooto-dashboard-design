import React from "react";
import styled from "styled-components";

import Button from "../Button/Button"

const MeetingFooter = styled("nav")`
  display: flex;
  justify-content: space-between;
`;

const UserColors = {
  blue: {
    bg: "rgba(77, 161, 255, 0.1)",
    text: "#4DA1FF"
  },
  red: {
    bg: "rgba(255, 109, 74, 0.10)",
    text: "#FF6D4A"
  },
  yellow: {
    bg: "rgba(255, 208, 18, 0.10)",
    text: "#FFD012"
  },
  purple: {
    bg: "rgba(124,77,196,0.10)",
    text: "#7C4DC4"
  }
};

const UserIcon = styled("div")`
  background: ${props => props.active ? UserColors['blue'].bg : UserColors[props.color].bg};
  color: ${props => props.active ? '#FFF' : UserColors[props.color].text};
  padding:1em;
  border-radius: 2px;
  display:inline-block;
  margin-left:1em;
  font-size:9px;
  letter-spacing:-0.23px;
`;

function KanbanMeeting({ attachments, className, date, title, users }) {
  return (
    <article className={className}>
      <h4>{date}</h4>
      <p>{title}</p>
      <MeetingFooter>
        <aside>
          <Button>
            <svg width="11px" height="10px" viewBox="0 0 11 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="ooto-Productivity-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ooto-Meetings" transform="translate(-201.000000, -419.000000)" fill="#4DA1FF" stroke="#4DA1FF" strokeWidth="0.3">
                        <g id="card-1" transform="translate(160.000000, 230.000000)">
                            <g id="event-1" transform="translate(20.000000, 92.000000)">
                                <g id="team" transform="translate(15.000000, 90.000000)">
                                    <g id="send-invitation-button">
                                        <g id="Icon/Invite" transform="translate(7.000000, 7.000000)">
                                            <path d="M0.694701581,4.60077279 L8.0766581,7.74370898 L8.91354545,0.732482856 L0.694701581,4.60077279 Z M8.2509664,8.23168859 C8.22191502,8.23168859 8.19307115,8.22576411 8.16609486,8.2145076 L0.122804348,4.78996115 C0.0495533597,4.7587589 0.00161857708,4.68983746 -4.15019756e-05,4.61341168 C-0.00149407115,4.53698589 0.0435355731,4.46648459 0.115541502,4.43251758 L9.07083794,0.218040582 C9.13869368,0.186048394 9.21983004,0.191775391 9.282083,0.233444227 C9.34433597,0.274915582 9.37753755,0.345416884 9.36902964,0.417300564 L8.45702372,8.05652148 C8.44955336,8.118926 8.41116403,8.1746161 8.35368379,8.20562088 C8.32193478,8.22299935 8.28645059,8.23168859 8.2509664,8.23168859 L8.2509664,8.23168859 Z" id="Fill-1"></path>
                                            <path d="M3.84472233,9.45762131 C3.75487055,9.43313346 3.69344763,9.35473286 3.69407016,9.26606315 L3.72000889,6.10634093 C3.72042391,6.05914258 3.73868478,6.01372157 3.77126383,5.9781747 L9.00341798,0.265791884 C9.07895158,0.183639106 9.21009783,0.175147352 9.29642194,0.246636068 C9.38274605,0.318519748 9.39166897,0.443131293 9.31634289,0.525284071 L4.13461364,6.18256923 L4.1149002,8.5557181 L5.25827964,6.77225239 C5.31825,6.67904058 5.44586858,6.64961567 5.54360573,6.70649067 C5.64134289,6.76316819 5.67226186,6.88501497 5.61249901,6.97783181 L4.07879348,9.37053147 C4.04040415,9.43036871 3.97254842,9.46512565 3.90158004,9.46512565 C3.88269664,9.46512565 3.86360573,9.46255838 3.84472233,9.45762131 Z" id="Fill-4"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </Button>
          <UserIcon color="blue">AM</UserIcon>
          <UserIcon color="purple">KS</UserIcon>
        </aside>
        <aside>
          <svg
            width="5px"
            height="10px"
            viewBox="0 0 5 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="ooto-Productivity-Dashboard"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="ooto-Meetings"
                transform="translate(-348.000000, -419.000000)"
                fill="#4DA1FF"
              >
                <g id="card-1" transform="translate(160.000000, 230.000000)">
                  <g id="event-1" transform="translate(20.000000, 92.000000)">
                    <path
                      d="M172.998906,104.514844 C172.988438,105.889062 171.874063,107.000312 170.5,107.000312 C169.125781,107.000312 168.011562,105.889062 168.000937,104.514844 L168,104.514844 L168,100.131719 L168,99.5048437 L168,98.87875 C168,97.8409375 168.839375,97 169.875,97 C170.910469,97 171.75,97.8409375 171.75,98.87875 L171.75,99.5048437 L171.75,100.131719 L171.75,102.327969 L171.75,103.117031 L171.75,104.514844 L171.747969,104.514844 C171.737344,105.1975 171.183594,105.747656 170.5,105.747656 C169.81625,105.747656 169.262656,105.1975 169.252031,104.514844 L169.25,104.514844 L169.25,103.88875 L169.25,103.117031 L169.25,102.327969 L169.25,101.38375 L169.25,100.648281 L169.25,99.9379687 L169.25,99.5048437 L169.875,99.5048437 L169.875,100.111875 L169.875,100.757344 L169.875,102.072187 L169.875,102.74875 L169.875,103.416875 L169.875,103.88875 L169.875,104.514844 C169.875,104.860625 170.154844,105.140938 170.5,105.140938 C170.845156,105.140938 171.125,104.860625 171.125,104.514844 L171.125,103.416875 L171.125,102.74875 L171.125,102.072187 L171.125,101.38375 L171.125,100.276562 L171.125,100.131719 L171.125,99.5048437 L171.125,98.87875 L171.123594,98.87875 C171.12375,98.8723437 171.125,98.8659375 171.125,98.859375 C171.125,98.1673438 170.565313,97.6067187 169.875,97.6067187 C169.184531,97.6067187 168.625,98.1673438 168.625,98.859375 C168.625,98.8659375 168.62625,98.8723437 168.626406,98.87875 L168.625,98.87875 L168.625,99.5048437 L168.625,100.131719 L168.625,100.276562 L168.625,101.38375 L168.625,102.842031 L168.625,104.514844 C168.625,105.552656 169.464375,106.393594 170.5,106.393594 C171.535469,106.393594 172.375,105.552656 172.375,104.514844 L172.375,102.842031 L172.375,98.87875 L172.375,98.2526563 L173,98.2526563 L173,98.87875 L173,104.514844 L172.998906,104.514844 Z"
                      id="pin-icon"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          {attachments} attachments
        </aside>
      </MeetingFooter>
    </article>
  );
}

const StyledKanbanMeeting = styled(KanbanMeeting)`
  background: #FFFFFF;
  border: 1px solid #E9EFF4;
  border-radius:6px;
  padding:1em;
  margin-bottom:1em;

  & > h4 {
    margin-top:0;
  }

  & > h4,
  & > nav > aside:nth-child(2)
  {
    opacity: 0.7;
    font-size: 11px;
    color: #989898;
    letter-spacing: -0.32px;
  }
  
  & > p {
    margin-bottom:1.5em;
  }

  & > nav > aside:nth-child(2) {
    padding-top:0.75em;
  }


  & > nav > aside:nth-child(2) svg {
    margin-right:0.5em;
  }


`;

export default StyledKanbanMeeting;
