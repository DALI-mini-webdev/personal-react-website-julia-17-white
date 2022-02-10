import './App.css';
import React, { component } from 'react';
import { MenuItems } from './components/Navbar/MenuItems';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <head>
      </head>
      <body>
        <h1 className="header">Hi! My name is Julia.</h1>
        <h3 className="header">Some of my interests include:</h3>
        <ul className="about">
            <li className="activity">running</li>
            <li className="activity">biking</li>
            <li className="activity">ice hockey</li>
            <li className="activity">reading</li>
            <li className="activity">physics</li>
        </ul>
        <h3 className="header">A little bit of my background information:</h3>
        <p className="about"> 
            I am from Orono, ME.  It's a small town about 2 hours north of Lewiston and is the home of UMaine.
            I am 18 and have a 16 year old younger sister.  We love to go on bike rides together!
            My favorite season is winter because I think the snow is beautiful.
        </p>
        <h3 className="header">Future Plans?</h3>
        <p className="about">
            I currently want to go into engineering but my main life dreams center around travel.
            I hope to bike across the US and bikepack in Europe and the Middle East when I'm older.
        </p>
        <p className="hehe">
          For a little more information about me, you can see that I put in the effort to make an entirely usless navbar.
          I just felt like it was important stylistically but I don't have the content to include numerous different pages.
          I hope that you enjoyed it too!
        </p>
      </body>
    </div>
  );
}

export default App;
