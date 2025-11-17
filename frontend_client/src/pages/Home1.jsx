import NavBar from '../components/NavBar'
import { Outlet } from 'react-router' 

function Home1() {
  return (
    <div>
      <NavBar/>
      <h1>Home</h1>
      <Outlet /> 
    </div>
  )
}

export default Home1
