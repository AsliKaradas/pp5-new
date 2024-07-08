import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import PostList from './components/PostList';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={<Home/>} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Navbar} />
          <Route path="/" component={PostList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
