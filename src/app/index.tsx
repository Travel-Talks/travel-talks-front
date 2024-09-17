import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { BrowserRouter } from '@app/providers'
import '@shared/styles/index.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter />
    </StrictMode>,
)
