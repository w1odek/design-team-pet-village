import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Designer from './pages/Designer';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designer/:slug" element={<Designer />} />
      </Routes>
    </Router>
  );
}

export default App;
