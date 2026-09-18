import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'

// Placeholder elements for now; replaced with real page components in step 6.
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <h1>Home</h1> },
      { path: '/about', element: <h1>About</h1> },
      { path: '/projects', element: <h1>Projects</h1> },
      { path: '/projects/:slug', element: <h1>Project detail</h1> },
      { path: '/resume', element: <h1>Resume</h1> },
      { path: '/contact', element: <h1>Contact</h1> },
      { path: '*', element: <h1>404 — Page not found</h1> },
    ],
  },
])
