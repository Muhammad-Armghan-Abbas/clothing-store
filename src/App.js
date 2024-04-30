import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import View from './components/pages/View.js';
import Home from './components/pages/Home.js'
import ShoppingBag from './components/ShoppingBag.js';
import Header from './components/header.js'
import Footer from './components/footer.js';
function App() {
  document.addEventListener('scroll', () => {
    const head = document.querySelector('header');
    if (window.scrollY > 20) {
      head.classList.add('scrolled')
    } else {
      head.classList.remove('scrolled')
    }
  })
  return (
    <Router>
   <div className="App">
<Header></Header>
<ShoppingBag></ShoppingBag>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    <Route path='/view/:id' element={<View></View>}>
    </Route>
    </Routes>
    <Footer></Footer>
   </div>
 </Router>
  )
}

export default App;
