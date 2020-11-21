const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = (id) => {
    return {
        type: BUY_CAKE,
        id
    }
}
const buyIceCream = (id) => {
    return {
        type: BUY_ICECREAM,
        id
    }
}

const cakeState = [
	{
		name:'Strawberry Delight',
		id:1,
		price: 200,
		flavour: 'Strawberry'
},
	{
		id:2,
		name:'Chocolate Heaven',
		price: 400,
		flavour: 'Dark Chocolate'
},
	{
		id:3,
		name:'White  walker',
		price: 500,
		flavour: 'Vaniila + berry'
}
]

const iceCreamsState = [
	{
		name:'Strawberry Delight',
		id:1,
		price: 200,
		flavour: 'Strawberry'
},
	{
		id:2,
		name:'Chocolate Heaven',
		price: 400,
		flavour: 'Dark Chocolate'
},
	{
		id:3,
		name:'White  walker',
		price: 500,
		flavour: 'Vaniila + berry'
}
]

const cakeReducer = (state = cakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return state.filter((cake) => cake.id !== action.id)
        default:
            return state
    }
}
const iceCreamReducer = (state = iceCreamsState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return state.filter((icecream) => icecream.id !== action.id)
        default:
            return state
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)

console.log('Initial State',store.getState())

const unsubscribe = store.subscribe(()=>console.log('Updated',store.getState()))

store.dispatch(buyCake(2))
store.dispatch(buyIceCream(2))

unsubscribe()