import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >

      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <App />
      </PersistGate>

    </Provider>
)
