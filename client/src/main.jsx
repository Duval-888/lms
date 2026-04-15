import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Remplace l'ancienne ligne par celle-ci :
const PUBLISHABLE_KEY = "pk_test_cHJpbWUtY29yZ2ktNTAuY2xlcmsuYWNjb3VudHMuZGV2JA"

// Garde le reste du code tel quel
if (!PUBLISHABLE_KEY) {
  throw new Error("Clé manquante")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Tu DOIS passer la clé ici, sinon Clerk reste désactivé */}
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)