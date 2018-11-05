import React from 'react';
import ChartistGraph from 'react-chartist';

import './chart.css';

const transpose = m => (m[0] || []).map((x,i) => m.map(x => x[i]));
const addLabels = (data) => ({
  name: 'My nice apples',
  data: data,
})

const transform = (data) => {
  return {
    labels: data.map(x => x.day),
    series: transpose(data.map(x => [x.positive, x.negative, x.neutral])).map(addLabels)
  };
}

export default ({data}) => {
  const lineData = transform(data);

  var options = {
    width: '100%',
    height: '300px'
  };

  var type = 'Line'

  return (
    <div>
      <ChartistGraph data={lineData} options={options} type={type} />
    </div>
  );
};