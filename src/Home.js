import React from 'react'
import Huddle from './Huddle';
import Love from './Love';
import Navbar from './Navbar';
import Start from './Start';
import Laptop from './Laptop';
const home = () => {
    return (
        <div>
          <Huddle></Huddle>
          <Love></Love>
          <Navbar></Navbar>
          <Start></Start>
          <Laptop></Laptop>
        </div>
    )
}

export default home
