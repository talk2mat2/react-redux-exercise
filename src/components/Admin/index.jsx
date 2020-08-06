import React, { Component } from 'react';
import {connect} from "react-redux"

class AdminPage extends Component {
    state = { loading:true }

    componentDidMount=()=>{
        setTimeout(()=>{this.setState(prevState=>({loading:!prevState.loading}))
    console.log(this.props)},2000)
    }
    render() { 
        const userg= this.props.Data
        console.log("testing",userg)
        return (<div> {this.state.loading?<h1>loading Data...</h1>:
            <h2>SHOPPING----<br/>

            game:{this.props.game["name"]!==undefined?<div><h2>{this.props.game.name}</h2>id:{this.props.game.id} "age"{this.props.user["age"]}</div>:"empty"}
            <br/>
            user:{this.props.user["name"]!==undefined?<div><h2>{this.props.user.name}</h2>id:{this.props.game.id} "age"{this.props.user["age"]}</div>:"no user found !"}
       </h2> 
        }</div>);
    }
}
 const mapStateToProps=state=>state

export default connect(mapStateToProps)(AdminPage);