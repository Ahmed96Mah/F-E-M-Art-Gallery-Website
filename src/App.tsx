import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </div>
  );
};

export default App;
