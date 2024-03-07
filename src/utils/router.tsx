import { createBrowserRouter } from 'react-router-dom'
import { IconHome } from '@tabler/icons-react'

import DefaultLayout from '../layouts/default.tsx'
import Index from '../pages'

const navLinks = [
  { icon: IconHome, label: 'Home', to: '/' },
  // { to: '/about', label: 'About', icon: IconInfoCircle },
]

const router = createBrowserRouter([
  {
    children: [
      { element: <Index />, path: '' },
      // { path: 'about', element: <div>About</div> },
    ],
    element: <DefaultLayout />,
    path: '/',
  },
])

export { navLinks, router }
