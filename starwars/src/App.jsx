import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import People from './views/People';
import Planet from './views/Planet';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Search />
      <Routes>
        <Route path="/people/:people_id" element={<People />}/>
        <Route path="/planet/:planet_id" element={<Planet />}/>
      </Routes>
    </fieldset>
  );
}

export default App;
