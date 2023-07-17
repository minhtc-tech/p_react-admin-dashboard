import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/layout/NavBar'
import SideBar from './components/layout/SideBar'
import './styles/global.scss'
import HomePage from './pages/Home'

function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />

        <div className='container'>
          <div className='menuContainer'>
            <SideBar />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
