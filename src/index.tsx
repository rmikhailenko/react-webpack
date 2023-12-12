// import ReactDOM from "react-dom";
import { App } from './App'
import { createRoot } from 'react-dom/client'

const domeNode = document.getElementById('root')
const root = createRoot(domeNode!)

root.render(<App />)
