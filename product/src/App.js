import logo from './logo.svg';
//import "bootstrap/dict/css/bootstrap.min.css";
import './App.css';
import NavbarComponent from './components/navbar.jsx';
import {BrowserRouter} from 'react-router-dom';
import FormComponent from './components/form.jsx';
import Footer from './components/footer1.jsx';
import TableComponent from './components/table.jsx';
import { renderProductTable } from './components/products.jsx';
const product = [
  {
    id: 1,
    name: "Apple",
    category: "Fruits",
    price: 100,
     quantity: 2
  },
  {
    id: 2,
    name: "Orange",   
    category: "Fruits",    
    price: 200,
    quantity: 3
  }
]
function App() {
  return (
   <BrowserRouter>
   <NavbarComponent/>
//   <FormComponent/>
    <renderProductTable products={product}  />
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
