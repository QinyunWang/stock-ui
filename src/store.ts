import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../src/reducers'

export default createStore(reducer, applyMiddleware(thunk))
