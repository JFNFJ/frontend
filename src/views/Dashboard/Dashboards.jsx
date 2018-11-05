import React from "react";

import Dashboard from "views/Dashboard/Dashboard";
import GridLoader from "react-spinners/GridLoader";

import { getTopic } from "services/topics";

var timeout;

class Dashboards extends React.Component {
  state = {
    topic: null,
  };

  fetchData(props, skipSpinner){
    if(!skipSpinner) {
      this.setState({topic: null});
    }
    const id = props.match.params.id;
    getTopic(id).then(topic => {
      this.setState({topic: topic})
    });
  }

  componentDidMount(){
    timeout = setInterval(this.refresh.bind(this), 5000);
    this.fetchData(this.props);
  }

  componentWillReceiveProps(props){
    this.fetchData(props)
  }

  componentWillUnmount(){
    clearInterval(timeout);
  }

  refresh(){
    this.fetchData(this.props, true);
    console.log("refreshing...");
  }

  render() {
    if(!this.state.topic){
      return (<GridLoader sizeUnit={"px"} size={150} color={'#123abc'}/>);
    }

    return (
      <div>
        <h1>{this.state.topic.name}</h1>
        <Dashboard result={this.state.topic} data={this.state.data} refresh={this.refresh.bind(this)}/>
      </div>
    );
  }
}

export default Dashboards;
