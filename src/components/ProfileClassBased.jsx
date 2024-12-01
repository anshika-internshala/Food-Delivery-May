import React from "react";

class ProfileClassBased extends React.Component {
  constructor(props) {
    console.log("Constructor called");
    super();
    this.props = props;
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");

    if (prevState.count !== this.state.count) {
      // Now fetch the new data here.
    }

    if (prevState.count1 !== this.state.count1) {
    }
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    console.log("Component rendered");
    function handleCount() {
      this.setState({ count: this.state.count + 1 });
    }
    return (
      <>
        <h1>Profile Class Based Component</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.state.count}</h3>
        <h3>{this.state.count1}</h3>
        <button className="border" onClick={handleCount.bind(this)}>
          Update Count
        </button>
      </>
    );
  }
}

export default ProfileClassBased;
