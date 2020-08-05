import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@rmwc/typography";
import { Tooltip } from "@rmwc/tooltip";
import "./Footer.scss";

export class Footer extends React.Component {
  render() {
    const cannonkeysLogo = (
      <svg
        className="cannonkeys"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1029.5 348.18"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M606.56,126.71c0,12.67,0,24.88,0,37.22c-10.92,0-21.65,0-32.52,0c0-30.35,0-60.75,0-91.26c0.66-0.03,1.27-0.08,1.87-0.08
			c7.8-0.01,15.6,0.03,23.39-0.03c1.33-0.01,2.11,0.39,2.86,1.5c7.75,11.56,15.55,23.08,23.35,34.61c0.37,0.55,0.76,1.09,1.42,2.01
			c0-12.89,0-25.34,0-37.94c10.91,0,21.63,0,32.5,0c0,30.36,0,60.7,0,91.24c-0.56,0.03-1.15,0.1-1.74,0.1
			c-7.8,0.01-15.6-0.03-23.39,0.04c-1.27,0.01-1.99-0.41-2.69-1.44c-7.83-11.36-15.71-22.68-23.58-34
			C607.65,128.13,607.25,127.62,606.56,126.71z"
            />
            <path
              d="M755.64,164.08c-8.77,0-17.37,0.03-25.97-0.06c-0.6-0.01-1.36-0.71-1.77-1.29c-7.9-11.3-15.76-22.64-23.63-33.97
			c-0.39-0.56-0.78-1.11-1.49-2.13c0,12.74,0,24.97,0,37.32c-11,0-21.73,0-32.58,0c0-30.38,0-60.73,0-91.25
			c0.59-0.04,1.18-0.11,1.77-0.11c7.86-0.01,15.72,0.03,23.58-0.04c1.36-0.01,2.09,0.47,2.82,1.56
			c7.75,11.56,15.56,23.08,23.35,34.6c0.36,0.54,0.76,1.05,1.43,1.97c0-12.94,0-25.4,0-37.98c10.9,0,21.63,0,32.48,0
			C755.64,103.14,755.64,133.49,755.64,164.08z"
            />
            <path
              d="M904.08,164.01c-11.08,0-21.77,0-32.58,0c0-30.42,0-60.77,0-91.3c0.59-0.04,1.18-0.11,1.77-0.11
			c7.86-0.01,15.72,0.03,23.58-0.04c1.35-0.01,2.09,0.47,2.82,1.56c7.75,11.56,15.56,23.08,23.35,34.6
			c0.36,0.54,0.76,1.05,1.43,1.97c0-12.94,0-25.4,0-37.98c10.9,0,21.63,0,32.48,0c0,30.42,0,60.77,0,91.25
			c-0.58,0.04-1.11,0.11-1.65,0.11c-7.86,0.01-15.72-0.02-23.58,0.03c-1.19,0.01-1.88-0.35-2.56-1.34
			c-7.83-11.35-15.71-22.67-23.58-34c-0.39-0.56-0.78-1.11-1.49-2.13C904.08,139.38,904.08,151.61,904.08,164.01z"
            />
            <path
              d="M465.18,164.01c0.27-0.79,0.48-1.49,0.75-2.16c11.39-29.11,22.8-58.22,34.16-87.35c0.54-1.38,1.16-1.98,2.76-1.96
			c9.41,0.09,18.82,0.06,28.22,0.02c1.2-0.01,1.86,0.26,2.34,1.49c11.49,29.47,23.02,58.93,34.55,88.39
			c0.18,0.45,0.31,0.92,0.52,1.52c-11.54,0-22.95,0-34.53,0c-1.04-3.62-2.09-7.28-3.15-11.01c-8.02,0-15.94,0-23.86,0
			c-4.23,0-4.23,0-5.39,4.12c-0.65,2.31-1.3,4.62-1.96,6.94C488.09,164.01,476.71,164.01,465.18,164.01z M522.31,129.09
			c-1.76-6.7-3.49-13.28-5.22-19.86c-0.18,0.02-0.36,0.03-0.54,0.05c-1.71,6.57-3.43,13.14-5.17,19.81
			C515.14,129.09,518.64,129.09,522.31,129.09z"
            />
            <path
              d="M371.99,181.36c10.79,0,21.52,0,32.42,0c0,11.47,0,22.82,0,34.18c0.11,0.04,0.23,0.09,0.34,0.13
			c0.36-0.52,0.74-1.02,1.08-1.56c6.46-10.4,12.94-20.78,19.35-31.21c0.73-1.18,1.46-1.7,2.91-1.69c11.2,0.07,22.4,0.04,33.6,0.04
			c0.55,0,1.1,0,2.02,0c-0.47,0.8-0.79,1.36-1.12,1.91c-8.57,14.03-17.13,28.07-25.76,42.07c-0.78,1.27-0.84,2.14,0.02,3.43
			c9.26,13.97,18.44,27.98,27.64,41.98c0.39,0.6,0.76,1.22,1.29,2.09c-0.82,0-1.35,0-1.88,0c-11.51,0-23.02-0.02-34.53,0.03
			c-1.26,0.01-1.98-0.4-2.68-1.44c-6.86-10.22-13.77-20.4-20.67-30.59c-0.38-0.56-0.77-1.12-1.46-2.12c0,11.61,0,22.73,0,33.99
			c-10.98,0-21.71,0-32.58,0C371.99,242.24,371.99,211.84,371.99,181.36z"
            />
            <path
              d="M726.18,209.2c-0.65,0.04-1.19,0.1-1.73,0.1c-9.9,0.01-19.8-0.02-29.7,0.03c-1.24,0.01-1.74-0.33-2.21-1.56
			c-0.52-1.37-1.49-2.73-2.62-3.67c-1.75-1.46-4.09-1.12-5.33,0.41c-1.29,1.59-1.2,4.14,0.55,5.5c1.43,1.11,3.13,2.04,4.86,2.55
			c4.67,1.39,9.44,2.45,14.15,3.75c4.97,1.37,9.76,3.18,13.9,6.36c8.06,6.2,10.44,14.81,9.73,24.4
			c-0.95,12.71-8.57,20.67-19.99,24.72c-16.24,5.75-32.52,5.2-48.05-2.67c-10.1-5.12-15.27-13.9-16.35-25.12
			c-0.02-0.18,0.04-0.36,0.1-0.82c0.58,0,1.17,0,1.76,0c9.72,0,19.43,0.02,29.15-0.02c1.2-0.01,1.83,0.27,2.32,1.49
			c1.85,4.6,6.96,6.94,11.61,5.27c1.02-0.37,2.1-1.4,2.51-2.39c0.59-1.4-0.09-2.95-1.38-3.72c-1.78-1.06-3.69-2.04-5.67-2.6
			c-5.22-1.5-10.56-2.6-15.76-4.15c-6.33-1.89-12.05-4.9-16.04-10.42c-9.68-13.38-5.31-33.53,9.02-41.93
			c7.36-4.31,15.38-5.95,23.8-6.03c9.22-0.09,18.11,1.28,26.3,5.85C720.1,189.53,726.02,199.09,726.18,209.2z"
            />
            <path
              d="M471.08,272.63c0-30.48,0-60.78,0-91.24c23.23,0,46.39,0,69.71,0c0,8.1,0,16.23,0,24.61c-12.32,0-24.65,0-37.08,0
			c0,3.02,0,5.78,0,8.74c9.7,0,19.38,0,29.17,0c0,8.14,0,16.08,0,24.18c-9.68,0-19.31,0-29.1,0c0,3.01,0,5.86,0,8.9
			c12.28,0,24.56,0,37,0c0,8.35,0,16.53,0,24.81C517.59,272.63,494.41,272.63,471.08,272.63z"
            />
            <path
              d="M645.07,181.38c-0.45,0.94-0.77,1.66-1.13,2.36c-10.68,20.98-21.37,41.95-32,62.95c-0.53,1.05-0.82,2.33-0.83,3.51
			c-0.07,7.42-0.04,14.84-0.04,22.39c-10.77,0-21.44,0-32.38,0c0-0.62,0-1.27,0-1.92c0-6.56,0.05-13.12-0.04-19.68
			c-0.02-1.35-0.35-2.83-0.96-4.03c-10.74-21.16-21.54-42.28-32.33-63.41c-0.33-0.65-0.63-1.32-1.05-2.21
			c0.78-0.04,1.37-0.1,1.95-0.1c10.77-0.01,21.53,0.02,32.3-0.04c1.37-0.01,2.05,0.39,2.62,1.67c4.1,9.26,8.28,18.49,12.45,27.73
			c0.27,0.61,0.58,1.2,0.99,2.05c0.43-0.84,0.78-1.46,1.08-2.11c4.22-9.28,8.45-18.55,12.64-27.84c0.41-0.91,0.79-1.5,1.98-1.49
			c11.26,0.05,22.52,0.03,33.78,0.04C644.32,181.25,644.56,181.31,645.07,181.38z"
            />
            <path
              d="M813.5,69.78c-26.85,0-48.62,21.77-48.62,48.62s21.77,48.62,48.62,48.62s48.62-21.77,48.62-48.62
			S840.35,69.78,813.5,69.78z M813.5,136.47c-9.98,0-18.07-8.09-18.07-18.07s8.09-18.07,18.07-18.07s18.07,8.09,18.07,18.07
			S823.48,136.47,813.5,136.47z"
            />
            <path
              d="M437.59,124.55c-2.52,6.95-9.16,11.92-16.98,11.92c-9.98,0-18.07-8.09-18.07-18.07s8.09-18.07,18.07-18.07
			c7.82,0,14.46,4.97,16.98,11.92h31.24c-3.03-23.95-23.45-42.47-48.22-42.47c-26.85,0-48.62,21.77-48.62,48.62
			s21.77,48.62,48.62,48.62c24.77,0,45.19-18.52,48.22-42.47H437.59z"
            />
          </g>
          <g>
            <path
              d="M345.65,129.06l-26.15-54.1c-2.09-4.33-7.18-6.31-11.65-4.54l-199.82,79.09c-25.5,10.09-39.7,37.41-33.31,64.08
			c0.37,1.55-0.09,3.19-1.22,4.32l-2.07,2.07c-0.97,0.97-1.71,2.14-2.17,3.43c-0.65,1.83-2.38,3.06-4.33,3.06h-2.76
			c-5.07,0-9.19-4.11-9.19-9.19v-3.67c0-2.54-2.06-4.59-4.59-4.59c-2.54,0-4.59,2.06-4.59,4.59v3.67c0,10.15,8.22,18.37,18.37,18.37
			H73.5c1.61,0,3.2,0.42,4.59,1.23l0.51,0.29c1.4,0.81,2.98,1.23,4.59,1.23h1.08c2.34,0,4.59,0.89,6.29,2.49
			c14.41,13.55,34.97,18.33,53.88,12.55c4.79-1.47,7.52-6.5,6.14-11.31c-6.74-23.53,0.26-48.86,18.14-65.59
			c12.58-11.77,28.59-17.59,44.55-17.59c17.42,0,34.79,6.94,47.62,20.66c2.92,3.12,7.6,3.82,11.3,1.68l69.77-40.29
			C346.15,138.61,347.75,133.39,345.65,129.06z"
            />
            <path
              d="M213.28,172.74c-28.41,0-51.44,23.03-51.44,51.44s23.03,51.44,51.44,51.44c28.41,0,51.44-23.03,51.44-51.44
			S241.69,172.74,213.28,172.74z M213.28,233.82c-5.33,0-9.64-4.32-9.64-9.64c0-5.33,4.32-9.64,9.64-9.64s9.64,4.32,9.64,9.64
			C222.93,229.51,218.61,233.82,213.28,233.82z"
            />
          </g>
        </g>
      </svg>
    );
    const prototypistLogo = (
      <svg
        className="prototypist"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 247.0917358 71.4936523"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M20.6672096,27.5480957l0.2001953-1.1196289c0,0,6.5585938-0.6801758,8.3984375-0.6801758
			c6.8388672,0,10.4780273,4.5991211,9.4785156,10.3183594c-1.0400391,5.7587891-6.4389648,9.9980469-11.9980469,9.9584961
			c-3.1196289,0-5.2392578-1.4799805-6.2387695-2.3598633l-1.5600586,8.7587891h1.5600586l-0.2001953,1.0795898h-4.2392578
			l0.199707-1.0795898h1.6000977l4.3989258-24.8759766H20.6672096z M37.6642799,36.0666504
			c0.8398438-4.9194336-2.4794922-9.2382813-8.4785156-9.2382813c-2.3994141,0-4.559082,0.2797852-5.7988281,0.4794922
			l-2.6396484,14.9179688c0.9599609,0.9995117,3.0795898,2.7192383,6.3188477,2.7192383
			C31.7453346,44.9450684,36.7843971,40.9060059,37.6642799,36.0666504z"
            />
            <path
              d="M53.2253151,26.2282715l-0.4799805,2.8393555h-0.9599609
			c0.1601563-0.9199219-0.4799805-1.5595703-1.3994141-1.5595703c-2.2397461,0-4.5595703,2.8793945-5.9990234,5.2392578
			L42.3468971,44.345459h1.5600586l-0.2001953,1.0795898h-4.2392578l0.2001953-1.0795898h1.5595703l2.9995117-16.8374023h-1.5996094
			l0.199707-1.0400391h2.6796875l-0.7597656,4.2792969c1.8793945-2.6391602,4.2392578-4.519043,8.1586914-4.519043H53.2253151z"
            />
            <path
              d="M72.4240417,35.9064941c-1.0395508,5.9189453-5.9589844,10.0786133-11.7177696,10.1582031
			c-5.7993164-0.0795898-9.3583984-4.2788086-8.3588867-10.1582031c1-5.6386719,6.2392578-10.1582031,11.9184532-10.1582031
			C69.9445496,25.748291,73.4640808,30.2277832,72.4240417,35.9064941z M71.384491,35.9064941
			c0.8798828-4.9189453-2.159668-9.0380859-7.2788086-9.0380859c-5.1591759,0-9.798336,4.1591797-10.6782188,9.0380859
			c-0.9199219,5.2392578,2.3994141,9.0385742,7.4785156,9.0385742C65.9455261,44.9450684,70.4645691,41.145752,71.384491,35.9064941
			z"
            />
            <path
              d="M82.6257019,41.5856934l-0.2797852,1.3999023c0,0-1.1201172,3.0791016-4.2392578,3.0791016
			c-2.8798828,0-3.7197266-1.9194336-3.159668-5.1191406l2.359375-13.4775391h-1.8793945l0.159668-1h1.9199219l0.9599609-5.4389648
			h1.0795898l-0.9599609,5.4389648h4.5195313l-0.2001953,1h-4.4790039l-2.3999023,13.4775391
			c-0.4399414,2.5595703,0.0800781,3.9995117,2.2397461,3.9995117c2.9194336,0,3.2397461-3.359375,3.2397461-3.359375H82.6257019z"
            />
            <path
              d="M104.2633972,35.9064941c-1.0395508,5.9189453-5.9589844,10.0786133-11.7177734,10.1582031
			c-5.7993164-0.0795898-9.3583984-4.2788086-8.3588867-10.1582031c1-5.6386719,6.2392578-10.1582031,11.9179688-10.1582031
			C101.783905,25.748291,105.3034363,30.2277832,104.2633972,35.9064941z M103.2238464,35.9064941
			c0.8798828-4.9189453-2.159668-9.0380859-7.2788086-9.0380859c-5.1591797,0-9.7983398,4.1591797-10.6782227,9.0380859
			c-0.9199219,5.2392578,2.3994141,9.0385742,7.4785156,9.0385742
			C97.7848816,44.9450684,102.3039246,41.145752,103.2238464,35.9064941z"
            />
            <path
              d="M114.0260925,19.989502h-2.5195313v26.6352539h2.5195313v2.5595703h-5.3994141V17.4299316h5.3994141
			V19.989502z"
            />
            <path
              d="M117.7863464,17.4299316h20.7163086l-0.0400391,4.7587891h-2.5595703v-2.2392578h-6.3188477v22.9160156
			h1.5200195v2.5595703h-5.8793945v-2.5595703h1.4799805V19.9494629h-6.3588867v2.2392578h-2.5595703V17.4299316z"
            />
            <path
              d="M149.943573,26.1481934h5.9189453v2.5595703h-1.5595703v16.3574219
			c-0.0400391,5.9189453-4.0395508,8.9985352-8.918457,8.9985352c-3.5195313,0-6.0791016-1.6396484-8.0385742-4.3994141v-2.3193359
			h1.9995117c0.5600586,2.1196289,3.159668,4.1992188,6.1987305,4.1992188c3.1196289,0,5.9194336-2,5.9594727-6.4790039v-2.7998047
			c-1.5600586,2.4799805-3.9194336,3.7597656-6.8789063,3.7597656c-4.2392578,0-7.3989258-3.4794922-7.3989258-8.4389648v-8.878418
			h-1.5595703v-2.5595703h5.8789063v2.5595703h-1.5996094v7.6787109c0,4.4394531,2.0395508,6.7988281,5.519043,6.7988281
			c2.5195313,0,4.6391602-1.3994141,6.0390625-3.9990234V28.7077637h-1.5600586V26.1481934z"
            />
            <path
              d="M159.065155,28.7478027v-2.5996094c3.8393555,0,4.2792969-0.4799805,9.3583984-0.4799805
			c6.3989258,0,10.7983398,4.5195313,10.7983398,10.1982422c0,5.7192383-4.5991211,10.1586914-10.078125,10.1186523
			c-2.5996094,0-4.6396484-1.1201172-5.7192383-1.8798828v7.4790039h1.5595703v2.4794922h-5.9189453v-2.4794922h1.5600586
			V28.7478027H159.065155z M176.3825378,35.8664551c0-3.9589844-3.359375-7.4384766-8.0786133-7.4384766
			c-1.9199219,0-3.6796875,0.199707-4.8793945,0.3999023v12.1176758c1.0400391,0.9199219,2.9995117,2.199707,5.6391602,2.199707
			C172.9430847,43.1452637,176.3825378,39.8659668,176.3825378,35.8664551z"
            />
            <path
              d="M181.8249207,26.1481934h4.359375v16.6772461h1.5595703v2.5996094h-5.9189453v-2.5996094h1.5600586
			V28.7077637h-1.5600586V26.1481934z M184.3444519,24.588623c-1.159668,0-2.0395508-0.8398438-2.0395508-1.9995117
			c0-1.1601563,0.8798828-2.0400391,2.0395508-2.0400391c1.1601563,0,2,0.8798828,2,2.0400391
			C186.3444519,23.7087402,185.4645691,24.588623,184.3444519,24.588623z"
            />
            <path
              d="M193.584198,38.6662598c0,3.1992188,3.9594727,5.0791016,6.7587891,5.0791016
			c2.9594727,0,5.359375-1.5195313,5.359375-3.5195313c-0.0400391-2.6396484-3.5595703-3.0395508-6.4790039-3.1191406
			c-4.6791992-0.2001953-7.6787109-2.3198242-7.6787109-5.4394531c0-3.3994141,3.3193359-6.0791016,7.4785156-6.0791016
			c2.5595703,0,4.8793945,0.7602539,6.519043,1.9599609v-1.3999023h2.2797852v5.2392578h-2.2797852
			c0,0-0.6000977-3.4394531-5.8789063-3.4394531c-2.7998047,0-5.0390625,1.6796875-5.0390625,3.7993164
			c0,1.9995117,2.5195313,3.159668,6.9985352,3.2792969c3.6396484,0.1601563,7.0791016,1.3999023,7.1191406,4.9995117
			c0,3.359375-3.5996094,5.9990234-7.9990234,5.9990234c-2.5595703,0-5.2788086-0.9199219-7.1586914-2.5996094v2.0395508h-2.2797852
			v-6.7988281H193.584198z"
            />
            <path
              d="M222.6222839,40.6257324v2.9995117c0,0-0.9995117,2.3598633-4.1591797,2.3598633
			c-3.4394531,0-5.0791016-2.2797852-5.0791016-6.2792969V28.7077637h-1.8798828v-2.5595703h1.8798828v-5.4389648h2.7993164
			v5.4389648h4.4394531v2.5595703h-4.4394531l0.0400391,10.5185547c0,2.4394531,0.3598633,4.2788086,2.4799805,4.2788086
			c2.359375,0,2.2392578-2.8793945,2.2392578-2.8793945H222.6222839z"
            />
            <path
              d="M225.6247253,19.989502v-2.5595703h5.3989258v31.7543945h-5.3989258v-2.5595703h2.5195313V19.989502
			H225.6247253z"
            />
          </g>
        </g>
      </svg>
    );
    return (
      <div className="footer">
        <Typography use="body2" tag="p">
          Site created by&nbsp;
          <Tooltip align="top" content="eskimojo" showArrow>
            <span className="bold">Ben Durrant</span>
          </Tooltip>
          , inspired by the spreadsheet created by&nbsp;
          <Tooltip align="top" content="Langelandia" showArrow>
            <span className="bold">Jeff Langeland</span>
          </Tooltip>
          .
        </Typography>
        <Typography use="body2" tag="p">
          Something to add/adjust? Join my{" "}
          <a href="https://discord.gg/zrcN3qF" target="_blank" rel="noopener noreferrer" className="bold">
            Discord server
          </a>{" "}
          and let us know, or contact me via{" "}
          <Tooltip align="top" content="keycaplendar@gmail.com" showArrow>
            <a
              href="mailto:keycaplendar@gmail.com?subject=KeycapLendar%20Change"
              target="_blank"
              rel="noopener noreferrer"
              className="bold"
            >
              Email
            </a>
          </Tooltip>
          . Please note that for your IC to be added to the site, it needs a render of the keyset on a board (not
          rendered by keycaprenders.com).
        </Typography>
        <Typography use="body2" tag="p">
          Please direct bug reports or feature requests to this project's{" "}
          <a
            href="https://github.com/EskiMojo14/keycaplendar/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="bold"
          >
            Github issues
          </a>{" "}
          page.
        </Typography>
        <div className="sponsors-container">
          <Typography use="body2" tag="p">
            <span className="bold">Kindly sponsored by:</span>
          </Typography>
          <div className="sponsors">
            <a href="https://cannonkeys.com/" target="_blank" rel="noopener noreferrer">
              {cannonkeysLogo}
            </a>
            <a href="https://prototypist.net/" target="_blank" rel="noopener noreferrer">
              {prototypistLogo}
            </a>
            <a href="https://www.deskhero.ca/" target="_blank" rel="noopener noreferrer">
              <div className="deskhero">
                Desk<span className="accent">[H]</span>ero
              </div>
            </a>
          </div>
        </div>
        <Typography use="body2" tag="p">
          <Link className="link" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="link" to="/terms">
            Terms of Service
          </Link>
        </Typography>
      </div>
    );
  }
}

export default Footer;
