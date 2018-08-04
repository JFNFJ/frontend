import React from 'react';
import CakeChart from '../component/CakeChart';

const data = [ {paw: "A favor", count: 2704659}
            , {paw: "Indeciso", count: 1159981}
            , {paw: "En contra", count: 4499890} ];

export default () => {
    return (
      <div>
          <h1> General! </h1>
          <CakeChart data={data} />
        </div>
    );
  };