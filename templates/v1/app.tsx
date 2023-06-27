import * as React from 'react'
import ReactDOM from 'react-dom/client'
// import * as serviceWorker from './serviceWorker'
import MainApp from './layout/MainApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </BrowserRouter>,
)

// if (process.env.NODE_ENV === "production") {
//     serviceWorker.register();
// }
