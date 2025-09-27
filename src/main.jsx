import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function HelloWorld() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif'
    }}>
      <h1>Hello, world</h1>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
)
