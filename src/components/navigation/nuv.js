import { div } from "framer-motion/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Navigation extends React.Component{
    render() {
        return (
            <div className="nav">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/post">Post</Link>
                <Link to="/ownpage">Ownpage</Link>
              </nav>
            </div>
          );
    }
}

export default Navigation