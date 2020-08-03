


let id=0
export const userreducer=(state={loading:true},action)=>{
    console.log(action.payload)
   return action.type==="userdata"?{...state,...action.payload}:state

}

export const gamereducer=(state={},action)=>{
    return action.type==="gamedata"?{...state,name:action.payload.name,id:++id}:state
}


// this.setState(prevState=>({loading:!prevState.loading}))