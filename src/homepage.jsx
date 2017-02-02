var React = require('react');
var ReactDOM = require('react-dom');
import CSS from './App.css'
var $ = require('jquery')

import Dash from './dashboard.jsx'

var Home = React.createClass({
  render: function() {
    return (
      <div>

      <div className="homepage">

      	{
      		// DISPLAY THE DASHBOARD
        }

      	<Dash />}

      	<center><h1 className="placeholderinstruction">Click on a Game to show widgets...</h1></center>

      </div>

      </div>
    )
  }
})

export default Home;
