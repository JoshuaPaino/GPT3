import React from "react";
//components
import { Blog, Features, Footer, Header, Possibility, WhatGPT3, WHatGPT3 } from "./containers";
import { Cta, Brand, Navbar } from "./components";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;
