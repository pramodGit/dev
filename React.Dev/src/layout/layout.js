import React from 'react';
import { createContext, useContext, useState } from 'react';
import Header from './header';
import LeftSidebar from './left-sidebar';
import Middle from "./middle-panel"
import Footer from './footer';

export const ThemeContext = createContext(null);
export default function Layout({children}) {
    
    return (
      <>
        <Header />
          <ThemeContext.Provider value="theme">
            <section className="container">
              <LeftSidebar />
              <main>
                <ThemeContext.Provider value="light">
                  <Middle data={children} />
                </ThemeContext.Provider>
              </main>
            </section>
            </ThemeContext.Provider>
        <Footer />
      </>
    )
};