import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home';
import { SearchResult } from './pages/SearchResult';
import { Subject } from './pages/Subject';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchResult/>}/>
      <Route path="/:subject" element={<Subject/>}/>
    </Routes>
  );
}

export default App;