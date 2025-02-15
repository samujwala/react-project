import React, {Component} from 'react';
import * as d3 from "d3";
import BarChart from "./chart";

class App extends Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'root'
  }

  render() {
    return (
        <div className="App">
          <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
        </div>
    );
  }
}
export default App;