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
import PrivetRoute from './Pages/Login/PrivetRoute';
import Branch from './Pages/Branch/Branch';




function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>

     <Header></Header>
     

     <Switch>
     <Route exact path="/">
           <Home></Home>
       </Route>
       <Route exact path="/home">
           <Home></Home>
       </Route>
       <Route exact path="/covid">
        <Covid></Covid>
       </Route>
       <PrivetRoute exact path="/doctor">
       <Doctor></Doctor>
       </PrivetRoute>
       <Route exact path="/contuct">
        <Contuct></Contuct>
       </Route>
       <PrivetRoute exact path="/viewCard/:cardId"> 
              <ViewCard></ViewCard>
       </PrivetRoute>
       <Route exact path="/login">
           <Login></Login>
       </Route>
       <Route exact path="/register">
           <Register></Register>
       </Route>
       <PrivetRoute exact path="/branch">
          <Branch></Branch>
       </PrivetRoute>

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
