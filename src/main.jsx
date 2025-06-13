import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import router from './router/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx';
import { AnimatePresence } from 'framer-motion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </AuthProvider>
  </StrictMode>,
)
