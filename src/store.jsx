import{ createStore,combineReducers} from 'redux'
import {userreducer,gamereducer} from './reducer'
import {persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"





const persistConfig={
    key:'root',
    storage,whitelist:['game',"user"]
   
}

const Allreducers= combineReducers({user:userreducer,game:gamereducer})
const persistedreducer=persistReducer(persistConfig,Allreducers)
export const store= createStore(persistedreducer)
export const persistor= persistStore(store)

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// export default()=>{
//     return{store,persistor}
// }
