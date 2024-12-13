import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
            <App />
        </main>
    </div>
)
