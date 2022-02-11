
import React from 'react';
import Header from './GlobalComponents/Header';
import StringConstant from './asset/StringConstant';
import Footer from './GlobalComponents/Footer';
import CourseList from './Screen/CourseList/index';
import './App.css';



function App(){
    return (  
          <div className="App">
            <Header text={StringConstant.heading}/>
            <CourseList/>
            <Footer text={StringConstant.footnote}/>
          </div>
    );
}


export default App;
 //only one default export, const export can be many
