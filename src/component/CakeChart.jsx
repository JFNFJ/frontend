import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';

import './chart.css';

const width = 960,
  height = 500,
  radius = Math.min(width, height) / 2;

const color = scaleOrdinal().range([
  '#fcd77f',
  '#ff2e4c',
  '#2e99b0',
]);

const arc = d3Arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 95);

const pie = d3Pie()
  .sort(null)
  .value(function(d) {
    return d.count;
  });

export default ({data}) => {
  const pieData = pie(data);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {pieData.map(d => (
          <g className="arc" key={`a${d.data.paw}`}>
            <path d={arc(d)} fill={color(d.data.paw)} />
            <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
              {d.data.paw}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};