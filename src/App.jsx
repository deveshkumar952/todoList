import './App.css'
import Todo from './components/todo'
import {Provider} from "react-redux"
import {store} from "./app/store"



function App() {
  
  return (
    <>
      <Provider store = {store}>
        <Todo>
        </Todo>
      </Provider>
    </>
  )
}

export default App
