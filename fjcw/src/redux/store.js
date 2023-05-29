import {applyMiddleware, combineReducers,compose,legacy_createStore as createStore} from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import reduxPromise from 'redux-promise'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'hua',
    storage,
    whitelist: ['CityReducer']
  }
  



const reducer=combineReducers({
    CityReducer,
    TabbarReducer
})
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const persistedReducer = persistReducer(persistConfig, reducer)
// applyMiddleware应用中间健
const store =createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxPromise)));




let persistor = persistStore(store)
export{store,persistor}