import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const TableChart = ({ name, width, height, viewBox, fillOuter }) => (
  <Tooltip title="테이블 차트" aria-label="tableChart">
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={`svg-icon icon-${name} || ''`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path
        fill={fillOuter}
        d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"
      />
    </svg>
  </Tooltip>
);
export default TableChart;
