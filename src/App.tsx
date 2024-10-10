import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  )
}

export default App