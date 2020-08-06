import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import{tickChecked} from "../../Actions/actions"
import { toggleChecked } from '../../Actions/action.type';
// import { toggleChecked } from '../../Actions/action.type';


const PasswordChange = ({todo,Data,toggleclick}) => {
  useEffect(()=>{
     
  })
  const handleClick=(event)=>{
    //   console.log('clicked',event.target.id)
      const item =  event.target.id
    //   console.log(typeof(Data[0].id))
     toggleclick(item,Data)
  }
   
    return ( <div>
      {Data.map(Element=><div key={Element.id}><h4 >{Element.name}</h4><input type="checkbox" onChange={handleClick} id={Element.id} checked={Element.isChecked} /></div>)}
<h1>hello</h1>
    </div> );
}
 
const mapStateToProps=state=>{
    return {todo:state.game,Data:state.Data.Data}
}
const mapDispatchToProps=dispatch=>{
    return {toggleclick:(item,Data)=>{dispatch(tickChecked(item,Data))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(PasswordChange);