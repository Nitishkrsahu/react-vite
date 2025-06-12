import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Eventhandling } from './component/Event/eventHandling.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { FormEvent } from './component/Event/formHandling.jsx'
import { ButtonEvent } from './component/Event/buttonEvent.jsx'
import { InputBox } from './component/2-way-data-blinding/inputbox.jsx'
import { Vite } from './component/react+vite/viteui.jsx'
import { TimerEvent } from './component/Event/setTimeoutEvent.jsx'
import { SetIntervalEvent } from './component/Event/setIntervalEvent.jsx'
import IntervalDemo from './component/Event/intervalDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntervalDemo />
  </StrictMode>,
)
