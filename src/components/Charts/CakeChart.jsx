import React from 'react';
import ChartistGraph from 'react-chartist';

import './chart.css';

const transform = (data) => {
  return {
    labels: ["Positivo", "Negativo", "Neutral"],
    series: [data.positive, data.negative, data.neutral]
  };
}

export default ({data}) => {
  const pieData = transform(data);

  var options = {
    width: '300px',
    height: '300px',
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  };

  var type = 'Pie'

  return (
    <div>
      <ChartistGraph data={pieData} options={options} type={type} />
    </div>
  );
};