import './index.css'
import Navbar from './Navbar.jsx'
import Portfolio from './Portfolio.jsx'

function App() {
  return (
    <>
      <Navbar />
      {/* pt-12 = 48px to clear the fixed navbar height */}
      <main className="pt-12">
        <Portfolio />
      </main>
    </>
  )
}

export default App
