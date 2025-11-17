import NavBar from '../components/NavBar'
import { Outlet } from 'react-router' 

function Home1() {
  return (
    <div>
      <NavBar/>
      <Outlet /> 
    </div>
  )
}

export default Home1
