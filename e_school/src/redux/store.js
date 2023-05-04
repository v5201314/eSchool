import {legacy_createStore as createStore} from 'redux'


//引入汇总好的 reducers
import reducers from './reducers'

export default createStore(reducers)