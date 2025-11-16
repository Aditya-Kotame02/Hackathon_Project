import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router'
import store from './store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
