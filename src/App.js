import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
