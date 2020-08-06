import{toggleChecked} from './action.type'

export const tickChecked=(item,Data)=>{
    
   
    const updatedData= Data.map((datas)=>
    { if(datas.id===parseInt(item)){
        console.log("datas.id",datas.id)
         datas.isChecked=!datas.isChecked
          
        
     }else{
       
     }
     return datas
   } 
   
 )

 console.log("updated ",updatedData)
return{type:toggleChecked,payload:{updated:updatedData}}
}




