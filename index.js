const redux = require('redux')
const reduxLogger = require('redux-logger')
// creating store
const createStore = redux.createStore
// combine reducers is used to combine multiple reducers
const combineReducers = redux.combineReducers
// it is used to apply the middleware
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// action for Cakes
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
// action for buyIcecream
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'Second Redux Action'
    }
}
// the reducers wants the state and action to give new State

// splitin the states
const cakeState = {
    numOfCakes: 10
}
const iceCreamState = {
    numOfIceCreams: 20
}
// reducer function spliting after this multiple reducers we wiil store it in a root reducers 
const cakeReducer = (state=cakeState,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state=iceCreamState,action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
// root reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// applyingMiddleware
const store = createStore(rootReducer,applyMiddleware(logger))
// return the current state
console.log('Initial State',store.getState())
// register the listeners via subscribe method....
//const unsubscribe = store.subscribe(()=>console.log('Updated State',store.getState()))
// it displays the loggs in the app
const unsubscribe = store.subscribe(()=>{})
// dispatch the action to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()   