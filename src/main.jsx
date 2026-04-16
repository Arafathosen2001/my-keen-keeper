import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './Layout/MainLayout'
import Homepage from './Pages/Home/Homepage'
import EError from './Pages/error/EError'
import Timeline from './Pages/Timeline/Timeline'
import Stats from './Pages/Stats/Stats'
import FriensDetiles from './Component/AllFriends/FriensDetiles'
import ContextProviderData from './Context/ContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => (fetch('/friends.json')),
        HydrateFallback: () => <h1 className='container h-screen text-center text-5xl mt-20'><span className="loading loading-bars loading-xl"></span>Loading ...</h1>,
        Component: Homepage
      },
      {
        path: "timeline",
        Component: Timeline
      },
      {
        path: "stats",
        Component: Stats
      },
      {
        path: 'friends/:friendId',
        loader: () => ( fetch('/friends.json')),
        HydrateFallback: () => <div className='container text-center text-5xl mt-20'><span className="loading loading-bars loading-xl"></span>Loading ...</div>,
        Component:FriensDetiles
      }
    ],
    errorElement:<EError></EError>

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProviderData>
      <RouterProvider router={router} />
    </ContextProviderData>
  </StrictMode>,
)
