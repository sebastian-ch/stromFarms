import React from 'react'
import { BrowserRouter, Redirect, Link, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import OurProducts from './components/OurProducts'
import OurCommunity from './components/OurCommunity'
import Development from './components/Development';

function App() {

  return (
    <div className='wrap'>
      <h1 className='title'>Strom Farms</h1>
      <BrowserRouter>
      <nav>

          <div className='myLink'><Link style={{textDecoration: 'none', color: 'white'}} to="/home">Home</Link></div>
          <div className='myLink'><Link style={{textDecoration: 'none', color: 'white'}} to="/about">About</Link></div>
          <div className='myLink'><Link style={{textDecoration: 'none', color: 'white'}} to="/products">Our Products</Link></div>
          <div className='myLink'><Link style={{textDecoration: 'none', color: 'white'}} to="/community">Our Community</Link></div>
          <div className='myLink'><Link style={{textDecoration: 'none', color: 'white'}} to="/development">Future Development</Link></div>
        
      </nav>
      
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <OurProducts />
          </Route>
          <Route path="/community">
            <OurCommunity />
          </Route>
          <Route path="/development">
            <Development />
          </Route>
        </Switch>
        
        
      </BrowserRouter>
    </div>
  )
}



export default App;
