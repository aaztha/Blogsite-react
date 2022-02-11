import React from 'react';
import Description from '../../../GlobalComponents/Description';
import Title from '../../../GlobalComponents/Title';

//------using spread operator..i.e without props:
const CourseItem = ({img, name, description})=>(
    <div className='course-item' style={{height:330}}>
        <img src={img}/>
        <Title text={name}></Title>
        <Description text={description}></Description>
        <button type="button">Read More</button>
        </div>
);

//------following code with props:
// const CourseItem = (props)=>(
//         <div className='course-item' style={{height:300}}>
//             <img src={props.img}/>
//             <Title text={props.name}></Title>
//             <Description text={props.description}></Description>
//             </div>
// );

export default CourseItem;