import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'
import ActivityProvider, { ActivityContext } from './ActivityContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActivityProvider>
      <RouterProvider router={router}></RouterProvider>
    </ActivityProvider>
  </StrictMode>,
)
