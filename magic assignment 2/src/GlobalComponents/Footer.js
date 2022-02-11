import React from 'react';

const Footer = (props)=>(
    <footer><h1>{props.text}</h1></footer>  
);

/*this is what rendering is..also written as:

const Footer = (props)=>{
    return(<footer>{props.text}</footer>)
};

or 

Class Footer extends React.Component{
    render(){
        return (<footer>{props.text}</footer>)
    }
}
 */

export default Footer;