import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Covid from './Pages/Covid/Covid';
import Contuct from './Pages/Contuct/Contuct';
import AuthProvider from './Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import ViewCard from './Pages/ViewCard/ViewCard';
import Notfound from './Pages/Notfound/Notfound';
import Doctor from './Pages/Doctor/Doctor';



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>

     <Header></Header>
     

     <Switch>
       <Route path="/home">
           <Home></Home>
       </Route>
       <Route path="/covid">
        <Covid></Covid>
       </Route>
       <Route path="/doctor">
       <Doctor></Doctor>
       </Route>
       <Route path="/contuct">
        <Contuct></Contuct>
       </Route>
       <Route exact path="/viewCard/:cardId"> 
              <ViewCard></ViewCard>
       </Route>
       <Route path="/login">
           <Login></Login>
       </Route>
       <Route path="/register">
           <Register></Register>
       </Route>
       <Route exact path="*">
           <Notfound></Notfound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
