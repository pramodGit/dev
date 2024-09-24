import React, { createContext, useContext, useState } from 'react';
import Header from './header';
import LeftSidebar from './left-sidebar';
import Middle from "./middle-panel"
import Footer from './footer';



export const ThemeContext = createContext();
const changeTheme = () => {
  themeObj.name = (themeObj.name === "light") ? "dark" : "light";
}
const themeObj = {"name": "light", "clickFn": changeTheme};

export default function Layout(props) {
    
    return (
      <>
        <Header />
          <ThemeContext.Provider value={themeObj}>
            <section className="container">
              <ThemeContext.Provider value={themeObj}>
                <LeftSidebar />
              </ThemeContext.Provider>
              <main>
                  <Middle content={props.children} />
              </main>
            </section>
            </ThemeContext.Provider>
        <Footer />
      </>
    )
};