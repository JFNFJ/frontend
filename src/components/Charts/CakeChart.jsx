import React from 'react';
import { toLabel } from './utils';
import ChartistGraph from 'react-chartist';

import './chart.css';

const transform = (data) => {
  return {
    labels: Object.keys(data),
    series: Object.values(data)
  };
}

export default ({data}) => {
  const pieData = transform(data);

  var options = {
    width: '300px',
    height: '300px',
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return toLabel(value);
    }
  };

  var type = 'Pie'

  return (
    <div>
      <ChartistGraph data={pieData} options={options} type={type} />
    </div>
  );
};