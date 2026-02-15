import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from './App.tsx'
import Home from './pages/home/Home.tsx'
import About from './pages/about/About.tsx'
import Contact from './pages/contact/Contact.tsx'
import Projects from './pages/projects/Projects.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "project", Component: Projects },
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
