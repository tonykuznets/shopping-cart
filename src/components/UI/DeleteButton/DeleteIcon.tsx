import React, { FC, memo } from 'react';

interface Props {
  className?: string;
}

const DeleteIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="11.18"
    height="15"
    viewBox="0 0 11.18 15"
  >
    <g id="rubbish-bin" transform="translate(-52.016)">
      <g id="Group_1995" data-name="Group 1995" transform="translate(52.016)">
        <path
          id="Path_395"
          data-name="Path 395"
          d="M74.546,110.092a.755.755,0,0,0,.754.723h7.047a.755.755,0,0,0,.754-.723l.5-10.624H74.043Zm5.872-7.985a.307.307,0,0,1,.307-.307h.49a.307.307,0,0,1,.307.307v6.07a.307.307,0,0,1-.307.307h-.49a.307.307,0,0,1-.307-.307Zm-2.146,0a.307.307,0,0,1,.307-.307h.49a.307.307,0,0,1,.307.307v6.07a.307.307,0,0,1-.307.307h-.49a.307.307,0,0,1-.307-.307v-6.07Zm-2.146,0a.307.307,0,0,1,.307-.307h.49a.307.307,0,0,1,.307.307v6.07a.307.307,0,0,1-.307.307h-.49a.307.307,0,0,1-.307-.307Z"
          transform="translate(-73.234 -95.815)"
          fill="#5b6770"
        />
        <path
          id="Path_396"
          data-name="Path 396"
          d="M62.722.773H59.471V.158A.158.158,0,0,0,59.313,0H55.9a.158.158,0,0,0-.158.158V.773H52.49a.474.474,0,0,0-.474.474V2.735H63.2V1.246A.474.474,0,0,0,62.722.773Z"
          transform="translate(-52.016)"
          fill="#5b6770"
        />
      </g>
    </g>
  </svg>
);

export default memo(DeleteIcon);
