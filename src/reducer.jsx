import Data from './data'
import {toggleChecked }from "./Actions/action.type"

export const initial_state={
    Data:Data
}


let id=0
export const userreducer=(state={},action)=>{
   

   return action.type==="userdata"?{...state,...action.payload,name:action.payload.name}:state

}

export const gamereducer=(state={},action)=>{
   
    return action.type==="gamedata"?{...state,name:action.payload.name,id:++id}:state
}

export const dataReducer=(state=initial_state,action)=>{
    
    switch(action.type){
        case toggleChecked:
            return {...state,Data:action.payload.updated};
           
           
        default:
            return state
            
    }
}

// this.setState(prevState=>({loading:!prevState.loading}))