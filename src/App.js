import React,{Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null
    }
  }
  componentDidMount() {
    fetch('https://api.spotify.com')
    .then(response => response.json())
    .then(data => this.setState({data}))
    console.log(this.state.data)
  }

  render () {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
