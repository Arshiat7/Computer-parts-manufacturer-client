import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
