var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import CSS from './App.css'

import Dash from './dashboard.jsx'
import Home from './homepage.jsx'

var Parent = React.createClass({
  render: function() {
    return (
      <div>
      	<Home />
      </div>
    )
  }
})

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);

// // THIS IS WHERE WE WILL RENDER EVERYTHING-----------------------------------------------------------------------------------
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path='/' component={Parent}>
//       <IndexRoute component={Parent} />
//       	<Route path='/home' component={Parent} />
//       	<Route path='/dash' component={Dash} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );