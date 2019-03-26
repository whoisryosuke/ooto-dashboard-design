import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const UserNav = styled("div")`
  display: flex;
  align-items: center;

  & > a {
    display: inline-block;
  }
`;

function SearchHeader({ className }) {
  return (
    <nav className={className}>
      <div className="content">
        <div class="search">
          <label for="search">
            <svg
              width="21px"
              height="22px"
              viewBox="0 0 21 22"
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
                fillOpacity="0.61"
              >
                <g
                  id="ooto-Meetings"
                  transform="translate(-167.000000, -41.000000)"
                  fill="#989898"
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                >
                  <g id="top-nav" transform="translate(106.000000, 21.000000)">
                    <g id="Search" transform="translate(61.000000, 16.000000)">
                      <path
                        d="M19.7730579,23.4885248 L15.4001536,18.9255455 L15.5537312,18.7217088 C16.732008,17.1578348 17.3842307,15.2392319 17.3842307,13.2216192 C17.3842307,8.29760045 13.549194,4.296 8.84268182,4.296 C4.13520594,4.296 0.3,8.29742307 0.3,13.2216192 C0.3,18.1448524 4.13536814,22.1461055 8.84268182,22.1461055 C10.6330199,22.1461055 12.3445746,21.5585149 13.7878028,20.483434 L14.0003001,20.3251419 L14.1836268,20.5164606 L18.4195003,24.9369953 C18.6030445,25.128117 18.8445898,25.2299979 19.0970205,25.2299979 C19.348424,25.2299979 19.5899447,25.1280324 19.7731695,24.9372437 C20.1548241,24.5389191 20.1548629,23.8880163 19.7730579,23.4885248 Z M19.7730579,23.4885248 C19.7730191,23.4884842 19.7729803,23.4884436 19.7729415,23.488403 L19.7731905,23.4886631 L19.7730579,23.4885248 Z M2.22534757,13.2216192 C2.22534757,9.42558719 5.19115812,6.33237676 8.84268182,6.33237676 C12.493809,6.33237676 15.4577502,9.42516895 15.4577502,13.2216192 C15.4577502,17.017869 12.493999,20.1097287 8.84268182,20.1097287 C5.19096797,20.1097287 2.22534757,17.0174509 2.22534757,13.2216192 Z"
                        id="search-icon"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </label>
          <input
            name="search"
            type="text"
            placeholder="Find a user, team, meeting..."
          />
        </div>
        <UserNav>
          <a href="#">
            <Button>
              <svg
                width="11px"
                height="11px"
                viewBox="0 0 11 11"
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
                  opacity="0.74"
                >
                  <g
                    id="ooto-Meetings"
                    transform="translate(-1240.000000, -45.000000)"
                    fill="#4DA1FF"
                    stroke="#4DA1FF"
                    strokeWidth="0.3"
                  >
                    <g
                      id="top-nav"
                      transform="translate(106.000000, 21.000000)"
                    >
                      <g
                        id="invite-button"
                        transform="translate(1127.000000, 15.000000)"
                      >
                        <g
                          id="paper-plane-icon"
                          transform="translate(8.000000, 9.416667)"
                        >
                          <path
                            d="M0.694701581,4.60077279 L8.0766581,7.74370898 L8.91354545,0.732482856 L0.694701581,4.60077279 Z M8.2509664,8.23168859 C8.22191502,8.23168859 8.19307115,8.22576411 8.16609486,8.2145076 L0.122804348,4.78996115 C0.0495533597,4.7587589 0.00161857708,4.68983746 -4.15019756e-05,4.61341168 C-0.00149407115,4.53698589 0.0435355731,4.46648459 0.115541502,4.43251758 L9.07083794,0.218040582 C9.13869368,0.186048394 9.21983004,0.191775391 9.282083,0.233444227 C9.34433597,0.274915582 9.37753755,0.345416884 9.36902964,0.417300564 L8.45702372,8.05652148 C8.44955336,8.118926 8.41116403,8.1746161 8.35368379,8.20562088 C8.32193478,8.22299935 8.28645059,8.23168859 8.2509664,8.23168859 L8.2509664,8.23168859 Z"
                            id="Fill-1"
                          />
                          <path
                            d="M3.90158004,9.46512565 C3.88269664,9.46512565 3.86360573,9.46255838 3.84472233,9.45762131 C3.75487055,9.43313346 3.69344763,9.35473286 3.69407016,9.26606315 L3.72000889,6.10634093 C3.72042391,6.05914258 3.73868478,6.01372157 3.77126383,5.9781747 L9.00341798,0.265791884 C9.07895158,0.183639106 9.21009783,0.175147352 9.29642194,0.246636068 C9.38274605,0.318519748 9.39166897,0.443131293 9.31634289,0.525284071 L4.13461364,6.18256923 L4.1149002,8.5557181 L5.25827964,6.77225239 C5.31825,6.67904058 5.44586858,6.64961567 5.54360573,6.70649067 C5.64134289,6.76316819 5.67226186,6.88501497 5.61249901,6.97783181 L4.07879348,9.37053147 C4.04040415,9.43036871 3.97254842,9.46512565 3.90158004,9.46512565"
                            id="Fill-4"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              Invite
            </Button>
          </a>
          <a href="#" class="avatar">
            <img src="https://via.placeholder.com/58x58" alt="User avatar" />
          </a>
        </UserNav>
      </div>
    </nav>
  );
}

const StyledSearchHeader = styled(SearchHeader)`
  width: 100%;
  height: 100px;
  background: #fff;
  border-bottom: 1px solid #e7e9ea;

  z-index: 710;

  & > .content {
    padding: 2em 4em;
    display: flex;
    justify-content: space-between;
  }

  & .avatar {
    width: 58px;
    height: 58px;
    border-radius: 100%;
    overflow: hidden;
    margin-left: 2em;
    display: inline-block;
  }

  & label {
    transform: translateY(0.25em);
    display: inline-block;
  }

  & input {
    min-width: 400px;
    border: 0;
    padding: 1em;
    font-size: 1em;
    display: inline-block;
  }
`;

export default StyledSearchHeader;
