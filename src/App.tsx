import './App.css'
import List from "./List"; 
import { AddFriendForm } from "./AddForm"; 

function App() {

  return (
    <>
      <List />,
      <AddFriendForm defaultAge={21}/>
    </>
  )
}

export default App
