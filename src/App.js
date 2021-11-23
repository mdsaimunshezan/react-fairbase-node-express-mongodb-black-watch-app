import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home/Home';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Login from './pages/login/Login/Login';
import Reguster from './pages/login/Reguster/Reguster';
import AllProdect from './pages/allProdect/AllProdect/AllProdect';
import AuthProvider from './context/AuthProvider';
import Detalse from './pages/home/Detalse/Detalse';
import Deshbord from './pages/deshbord/Deshbord/Deshbord';
import PrivateRoute from './pages/login/PrivateRoute/PrivateRoute';
import MyOrder from './pages/deshbord/MyOrder/MyOrder';
import ReviousUser from './pages/deshbord/ReviousUser/ReviousUser';
import Prement from './pages/deshbord/Prement/Prement';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/allprodect">
            <AllProdect />
          </Route>
          <PrivateRoute exact path="/detalse/:id">
            <Detalse />
          </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/reguster">
            <Reguster/>
          </Route>
          <Route exact path="/deshbord">
            <Deshbord/>
          </Route>
          <Route exact path="/myorder">
            <MyOrder/>
          </Route>
          <Route exact path="/revious">
            <ReviousUser/>
          </Route>
          <Route exact path="/prement">
            <Prement/>
          </Route>
        </Switch>
        <Footer/>
      </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
