import { createContext } from "react"
import { ToastContainer } from 'react-toastify'


export const UserContext = createContext()
function App() {

  return (
    <>
    <UserContext.Provider value={{}}>
      <Routes>
        <Route />
        <Route>

        </Route>
      </Routes>

    </UserContext.Provider>
      <ToastContainer />
          
    </>
  )
}

export default App
