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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: "timeline",
        Component: Timeline
      },
      {
        path: "stats",
        Component: Stats
      }
    ],
    errorElement:<EError></EError>

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
