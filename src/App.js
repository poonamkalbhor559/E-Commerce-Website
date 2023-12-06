import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/cart';
import Home from './pages/home';
import Navbar from './components/navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/cart"element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
