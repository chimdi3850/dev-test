import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {store} from './lib/store.ts'
import {Provider} from 'react-redux'
import { Toasty } from '@cloudflare/kumo/components/toast'
import { appToastManager } from './lib/toast.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toasty toastManager={appToastManager}>
      <Provider store={store}>
        <App />
      </Provider>
    </Toasty>
  </StrictMode>,
)
