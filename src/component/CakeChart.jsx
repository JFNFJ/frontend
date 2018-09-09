import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';
import { toLabel, colors } from './utils';

import './chart.css';

const width = 960,
  height = 500,
  radius = Math.min(width, height) / 2;

const color = scaleOrdinal().range(colors());

const arc = d3Arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 95);

const pie = d3Pie()
  .sort(null)
  .value(function(d) {
    return d.count;
  });

const transform = (data) => {
  return Object.keys(data).map(label => {
    return {label: toLabel(label), count: data[label]};
  });
}

export default ({data}) => {
  const pieData = pie(transform(data));

  return (
    <svg width={width} height={height}>
      <g>
        {pieData.map(d => (
          <g className="arc" key={`a${d.data.label}`}>
            <path d={arc(d)} fill={color(d.data.label)} />
            <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
              {d.data.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};