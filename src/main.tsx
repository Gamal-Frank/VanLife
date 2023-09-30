import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Context.tsx/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <ContextProvider>
    <App />
    </ContextProvider>
    </BrowserRouter>
)
