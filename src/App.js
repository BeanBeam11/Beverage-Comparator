import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Menu from './pages/Menu'
import Comment from './pages/Comment'
import Compare from './pages/Compare'
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu/:meniId" component={Menu} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/comment" component={Comment} />
          {/* <Route exact path="/:pageName" component={Home} /> */}
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
