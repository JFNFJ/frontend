import React, { Component } from 'react';
import CakeChart from '../../component/CakeChart';
import MapChart from '../../component/MapChart';
import DateChart from '../../component/DateChart';
import Paw from '../../model/Paw';
import { Object } from 'core-js';

import './styles.css';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const dataGen = (coef) => new Paw(getRandomInt(10 * coef),
  getRandomInt(10 * coef),
  getRandomInt(1 * coef)
)

const dataSexGen = () => {
  return {
    "male": dataGen(90)
    , "female": dataGen(100)
    , "non-binary": dataGen(5)
    , "brand": dataGen(1)
  }
}


function dateFormat(date){
  var day = date.getDate();
  var month = date.getMonth() + 1;
  return day + "/" + month;
}

const dataLocGen = () => {
  var ret = {};
  for (let index = 5; index != 0; index--) {
    const day = dateFormat(new Date(new Date().setDate(new Date().getDate()-index)));
    ret[day] = dataSexGen();
  }
  return ret;
}

const data = {
  "AR": dataLocGen(),
  "BR": dataLocGen(),
  "CL": dataLocGen(),
  "BO": dataLocGen(),
  "PY": dataLocGen(),
  "UY": dataLocGen(),
}

const concat = (x, y) =>
  x.concat(y)

const flatMap = (xs, f) =>
  xs.map(f).reduce(concat, [])

const reduce = (paws) => paws.reduce((acc, paw) => paw.add(acc), Paw.seed())

const getData = (data, filter) => {
  var country, day, genre;

  switch (filter.country) {
    case "all":
      country = Object.values
      break;
    default:
      country = (x) => [x[filter.country]];
  }

  switch (filter.day) {
    case "all":
      day = Object.values
      break;
    default:
      day = (x) => [x[filter.day]];
  }

  switch (filter.genre) {
    case "all":
      genre = Object.values
      break;
    default:
      genre = (x) => [x[filter.genre]];
  }

  return reduce(
    flatMap(flatMap(country(data), day), genre)
  );
}

const getMapData = (data, filter) => {
  return Object.keys(data).map((key) => {
    const value = getData(data, { ...filter, country: key });
    return { k: key, v: value }
  });
}

const getDateData = (data, filter) => {
  return Object.keys(data.AR).map((key) => {
    const value = getData(data, { ...filter, day: key });
    return { k: key, v: value }
  });
}

export default class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        country: "all"
        , day: "all"
        , genre: "all"
      },
      countries: Object.keys(data).concat("all"),
      days: Object.keys(data.AR).concat("all"),
      genres: Object.keys(data.AR[Object.keys(data.AR)[0]]).concat("all")
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleCountryChange(event) {
    var value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        country: value
      }
    })
    );
  }

  handleDayChange(event) {
    var value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        day: value
      }
    })
    );
  }

  handleGenreChange(event) {
    var value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        genre: value
      }
    })
    );
  }

  render() {
    return (
      <div class="Charts">
        <h1>{this.props.match.params.id}</h1> 
        <div>
          <label>
            Pais:
              <select id="country" value={this.state.filter.country} onChange={this.handleCountryChange}>
              {this.state.countries.map(country =>
                <option key={"country-" + country} value={country}>{country}</option>
              )}
            </select>
          </label>
          <label>
            Dia:
              <select id="day" value={this.state.filter.day} onChange={this.handleDayChange}>
              {this.state.days.map(day =>
                <option key={"day-" + day} value={day}>{day}</option>
              )}
            </select>
          </label>
          <label>
            Genero:
              <select id="genre" value={this.state.filter.genre} onChange={this.handleGenreChange}>
              {this.state.genres.map(genre =>
                <option key={"genre-" + genre} value={genre}>{genre}</option>
              )}
            </select>
          </label>
        </div>

        <div className="chartCard">
          <h1> Mapa! </h1>
          <MapChart data={getMapData(data, this.state.filter)} />
        </div>

        <div className="chartCard">
          <h1> General! </h1>
          <CakeChart data={getData(data, this.state.filter)} />
        </div>

        <div className="chartCard">
          <h1> Fecha! </h1>
          <DateChart data={getDateData(data, this.state.filter)}/>
        </div>
      </div>
    );
  };
}