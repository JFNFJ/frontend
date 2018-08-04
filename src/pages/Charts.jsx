import React from 'react';
import CakeChart from '../component/CakeChart';
import MapChart from '../component/MapChart';
import DateChart from '../component/DateChart';

const CakeData = { for: 2704659, no: 1159981, against: 4499890 };


const MapData = { "AR": { for: 2704659, no: 10, against: 0 }
                , "BR": { for: 0, no: 50, against: 4499890 }
                , "RU": { for: 0, no: 50, against: 0 }
                };

const DateData = { "21-08-2018": { for: 2704659, no: 10, against: 0 }
                 , "22-08-2018": { for: 0, no: 50, against: 4499890 }
                 , "23-08-2018": { for: 0, no: 50, against: 0 }
                 };

export default () => {
    return (
      <div>
          <h1> General! </h1>
          <CakeChart data={CakeData} />

          <h1> Mapa! </h1>
          <MapChart data={MapData}/>

          <h1> Fecha! </h1>
          <DateChart data={DateData}/>
        </div>
    );
  };