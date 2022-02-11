/*Default js file in CourseList*/
import React from 'react';
import CourseItem from './Component/CourseItem';
import './style.css';

const json= require('../../asset/CourseList.json')

const CourseList = ()=>{
const sectionList = json.section;
    //inline json data :
    // {
//     sectionList=[{
//         "sectionName" : "Section 1",
//         courseList:[{},{},{},{},{},{}]
//     },
//     {
//         "sectionName" : "Section 2",
//         courseList:[{},{},{},{}]
//     },
//     {
//         "sectionName" : "Section 3",
//         courseList:[{},{}]
//     }];
//       //the array of course-item for making courselist
// }

    return(
        <div className="course-list-container">
        {
        sectionList.map((section,index) => (
            <div id={section.sectionName}>
                <h2>{section.sectionName}</h2>
                <div className="course-item-container responsive-course-item">
                {section.courseList.map(item=>  <CourseItem {...item}/>)}  
                </div>
            </div>
             //... used only in arrays with homogenous items
        ))
        }
        </div>
        )
        
        
    /* this return code is same as :
    return(
    <>
    <CourseItem/><CourseItem/><CourseItem/><CourseItem/>
    </>
    )
    */
}

export default CourseList;