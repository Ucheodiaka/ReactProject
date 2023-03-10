import './App.css';
import logo from "./logo";
import Nav from './Components/Nav';
import Header from  './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <img src={logo} alt="Logo" />
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
