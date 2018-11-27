import React from 'react';
import ChartistGraph from 'react-chartist';

import './chart.css';

const transform = (data) => {
  return {
    labels: ["+", "-", "~"],
    series: [data.positive, data.negative, data.neutral]
  };
}

const sum = (a, b) => a + b;

export default ({data}) => {
  const pieData = transform(data);

  var options = {
    width: '300px',
    height: '300px',
    labelInterpolationFnc: function(value) {
      return value + " " + Math.round(pieData.series[pieData.labels.indexOf(value)] / pieData.series.reduce(sum) * 100) + "%";
    }
  };

  var type = 'Pie'

  return (
    <div>
      <ChartistGraph data={pieData} options={options} type={type} />
    </div>
  );
};