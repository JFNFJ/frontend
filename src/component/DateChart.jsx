import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { area as d3Area } from 'd3-shape';
import { toLabel, colors } from './utils';

const width = 700,
    height = 400,
    xScale = 'time',
    x = function(d) {
      debugger;
      return d.date;
    };


const color = scaleOrdinal().range(colors());

const area = d3Area();

const transform = (data) => {
  return Object.entries(data).map(entries => {
    return {label: entries[0], count: entries[1].for};
  });
}

export default ({data}) => {
  const areaData = transform(data);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {areaData.map(d => (
          <g className="date" key={`a${d.data.label}`}>
            <path d={area(d)} fill={color(d.data.label)} />
            <text dy=".35em">
              {d.data.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};