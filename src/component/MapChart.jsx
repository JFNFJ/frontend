import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import { toLabel, colors } from './utils';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const tooltipStyle = (shown, x, y) => {
  return {
    display: shown ? 'block' : 'none',
    position: 'absolute',
    top: y-60,
    left: x+10,
    background: 'white',
    border: "1px solid black",
    padding: 3,
    borderRadius: 5,
  }
}

const popScale = scaleLinear()
  .domain([1, 0, -1])
  .range(colors());

const colorFor = (data) => {
  return (1* data['for'] + (-1) * data.against + 0 * data.no) / (data['for'] + data.against + data.no);
}

export default class MapChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: false,
      x: 0,
      y: 0,
      location: '',
      value: ''
    };
    this.handleMove = this.handleMove.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.style = this.style.bind(this);
  }

  handleMove(geography, evt) {
    const x = evt.clientX
    const y = evt.clientY + window.pageYOffset
    
    this.setState({
      shown: true,
      x: x,
      y: y,
      location: geography.properties.name,
      value: this.renderTooltip(this.props.data[geography.properties.wb_a2])
    });
  }

  handleLeave() {
    this.setState({shown: false});
  }

  style(loc) {
    const data = this.props.data[loc];
    if(data) {
      return {
        default: {
          fill: popScale(colorFor(data)),
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none",
        } 
      }
    } else {
      return {
        default: {
          fill: "black",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none",
        } 
      }
    }
    
  }

  renderTooltip(value){
    return JSON.stringify(value);
  }
  
  render() {
    return (
        <div style={wrapperStyles}>
          <div style={tooltipStyle(this.state.shown, this.state.x, this.state.y)}>
            Loc: {this.state.location} <br />
            {this.state.value}
          </div>
          <ComposableMap
            projectionConfig={{
              scale: 205,
              rotation: [-11,0,0],
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
            >
            <ZoomableGroup center={[0,20]}>
              <Geographies geography={ "/static/world-50m-with-population.json" }>
                {(geographies, projection) => geographies.map((geography, i) => (
                  <Geography
                    key={ i }
                    geography={ geography }
                    projection={ projection }
                    onMouseMove={this.handleMove}
                    onMouseLeave={this.handleLeave}
                    style={this.style(geography.properties.wb_a2)}
                  />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      )
    }
}