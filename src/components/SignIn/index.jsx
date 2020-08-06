import React, { Component } from 'react';
import *as storefile from '../../store'
import {connect} from 'react-redux'




class SignInPage extends Component {
    state = { }

    handleClick=(event)=>{
        // console.log(event.target.name)
    if(event.target.name==="button1"){
        this.props.dispatch({type:"userdata",
    payload:{name:"martin chukwumas",age:"32"}})
    }

   else if(event.target.name==="button2"){ storefile.store.dispatch({type:"gamedata",
   payload:{name:"soccer"}})}
   else{ 
       storefile.store.dispatch({type:"gamedata",
   payload:{}})
this.props.dispatch({type:"userdata",
payload:{}})

}console.log("data is",this.props.Data)
        console.log("state is",storefile.store.getState())
        }
        
    render() { 
        // const data=store.getState()
        // const Data=[{name:23},{name:2}]
        
        return (
            
           
        <div>
        game:{this.props.game["name"]!==undefined?<div><h2>{storefile.store.getState()['game']["name"]}</h2>id:{storefile.store.getState()['game']["id"]} "age"{this.props.user["age"]} </div>:"empty"}
                <button name='button1' id="2" onClick={this.handleClick} >ADD user</button>
                <button id="3" name="button2" onClick={this.handleClick} >Add game</button>
                <button name='button3' id="3" onClick={this.handleClick} >clear data</button>
                {this.props.Data.Data.map(Elements=><h3 key={Elements.id}>{Elements.name}<br/>Age: {Elements.age} completed: {JSON.stringify(Elements.isChecked)}</h3>)}
            </div>
            
         );
    }
}
const mapStateToProps =state=>{
    return state
} 

export default connect(mapStateToProps)(SignInPage);