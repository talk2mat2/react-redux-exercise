import React, { Component } from 'react';
import *as storefile from '../../store'
import {connect} from 'react-redux'




class SignInPage extends Component {
    state = { }

    handleClick=(event)=>{
        // console.log(event.target.name)
    if(event.target.name==="button1"){
        this.props.dispatch({type:"userdata",
    payload:{name:"martin chukwuma",age:"32"}})
    }

   else{ storefile.store.dispatch({type:"gamedata",
   payload:{name:"soccer"}})}
   console.log("game is",storefile.store.getState()["game"]['name'])
console.log("state is",this.state)
        console.log("name is",storefile.store.getState()['user']["name"])
        }
        
    render() { 
        // const data=store.getState()
        // const Data=[{name:23},{name:2}]
        
        return (
            
           
        <div>
        game:{this.props.game["name"]!==undefined?<div><h2>{storefile.store.getState()['game']["name"]}</h2>id:{storefile.store.getState()['game']["id"]} "age"{this.props.user["age"]}</div>:"empty"}
                <button name='button1' id="2" onClick={this.handleClick} >ADD user</button>
                <button id="3" onClick={this.handleClick} >Add game</button>
            </div>
            
         );
    }
}
const mapStateToProps =state=>{
    return state
} 

export default connect(mapStateToProps)(SignInPage);