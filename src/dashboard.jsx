var React = require('react');
var ReactDOM = require('react-dom');
import CSS from './App.css'
var $ = require('jquery')

var Dash = React.createClass({

  showwidget() {

  	$(".gameone").click(function() {
  		$(".widget").css({"display":"inherit"})
  		$(".gametwo").css({"display":"none"})
  		$(".gamethree").css({"display":"none"})
  		$(".backtogames").css({"display":"inherit"})
  	})

  	$(".gametwo").click(function() {
  		$(".widgettwo").css({"display":"inherit"})
  		$(".gameone").css({"display":"none"})
  		$(".gamethree").css({"display":"none"})
  		$(".backtogames").css({"display":"inherit"})
  	})

  	$(".gamethree").click(function() {
  		$(".widgetthree").css({"display":"inherit"})
  		$(".gameone").css({"display":"none"})
  		$(".gametwo").css({"display":"none"})
  		$(".backtogames").css({"display":"inherit"})
  	})

  	$(".backtogames").click(function() {
  		$(".widget").css({"display":"none"})
  		$(".widgettwo").css({"display":"none"})
  		$(".widgetthree").css({"display":"none"})
  		$(".gameone").css({"display":"inherit"})
  		$(".gametwo").css({"display":"inherit"})
  		$(".gamethree").css({"display":"inherit"})
  		$(".backtogames").css({"display":"none"})
  	})



  },

  render: function() {
    return (
      <div>
        
        <div className="dashboard">



        <center>

        	<div className="row">
			 
			  <div className="col-md-6">

			  	<div className="profilepic">

        		</div>

			  </div>
			 
			  <div className="col-md-6">

			  	<h3 id="pj">Parth J</h3>
  			
	  			<ul id="pjsub">
	  				<li className="lineitem">Edit profile <span className="glyphicon glyphicon-pencil"></span></li>
	  				<li className="lineitem">Settings <span className="glyphicon glyphicon-cog"></span></li>
	  				<li className="lineitem">Log out <span className="glyphicon glyphicon-remove"></span></li>
	  			</ul>

	  		

			  </div>
			
			</div>

        </center>
        <br />
        <center><div onClick={this.showwidget}><h4 className="backtogames">Back to games</h4></div></center>

        <div className="gameone" onClick={this.showwidget}>
        	<center>Game 1</center>
        </div>

	        <div className="widget">
	        </div>
	        <div className="widget">
	        </div>
	        <div className="widget">
	        </div>

        <div className="gametwo" onClick={this.showwidget}>
        	<center>Game 2</center>
        </div>

        	<div className="widgettwo">
	        </div>
	        <div className="widgettwo">
	        </div>
	        <div className="widgettwo">
	        </div>

        <div className="gamethree" onClick={this.showwidget}>
        	<center>Game 3</center>
        </div>

        	<div className="widgetthree">
	        </div>
	        <div className="widgetthree">
	        </div>
	        <div className="widgetthree">
	        </div>

         <div className="addbox">
        	<center>Add game</center>
        </div>


        </div>

      </div>
    )
  }
})

export default Dash;
