import {createStore, compose, applyMiddleware} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import reduxPromise from 'redux-promise'
export const history = createHistory()

function configureStoreProd (initialState) {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    // NOTE: добавление мидлверов ТОЛЬКО ДЛЯ ПРОДАКШЕНА
    reduxPromise,
    thunk,
    reactRouterMiddleware
  ]

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}

function configureStoreDev (initialState) {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    reduxImmutableStateInvariant(),
    // NOTE: добавление мидлверова для дев сервера
    reduxPromise,
    thunk,
    reactRouterMiddleware
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // добавление интсрументов для редакс дев
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)

  ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (module.hot) {
    // Добавление хот реплесмента для редюсеров
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
