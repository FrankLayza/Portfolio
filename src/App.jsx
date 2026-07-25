import './index.css';
import Navbar from './components/Navbar';
import Portfolio from './Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-12">
        <Portfolio />
      </main>
    </>
  );
}

export default App;
