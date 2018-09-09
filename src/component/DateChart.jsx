import React from 'react';
import { toLabel } from './utils';
import ChartistGraph from 'react-chartist';

import './chart.css';

const transpose = m => m[0].map((x,i) => m.map(x => x[i]));
const addLabels = (data) => ({
  name: 'My nice apples',
  data: data,
})

const transform = (data) => {

  return {
    labels: data.map(x => x.k),
    series: transpose(data.map(x => x.v).map(Object.values)).map(addLabels)
  };
}

export default ({data}) => {
  const lineData = transform(data);

  var options = {
    width: '300px',
    height: '300px'
  };

  var type = 'Line'

  return (
    <div>
      <ChartistGraph data={lineData} options={options} type={type} />
    </div>
  );
};