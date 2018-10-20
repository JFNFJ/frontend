import React from "react";

import Dashboard from "views/Dashboard/Dashboard";
import GridLoader from 'react-spinners/GridLoader';

import { getDataFor } from "services/data";
import { getTopic } from "services/topics";

class Dashboards extends React.Component {
  state = {
    topic: null,
    data: null
  };

  fetchData(props){
    this.setState({topic: null, data: null});
    const id = props.match.params.id;
    getTopic(id).then(topic => {
      this.setState({topic: topic, data: getDataFor(id)})
    });
  }

  componentDidMount(){
    this.fetchData(this.props);
  }

  componentWillReceiveProps(props){
    this.fetchData(props)
  }

  render() {
    if(!this.state.data || !this.state.topic){
      return (<GridLoader sizeUnit={"px"} size={150} color={'#123abc'}/>);
    }

    return (
      <div>
        <h1>{this.state.topic.name}</h1>
        <Dashboard topic={this.state.topic} data={this.state.data} />
      </div>
    );
  }
}

export default Dashboards;
