import React from 'react';
import {useHistory} from 'react-router-dom';

const ContactUs = (props) => {
    // console.log(props); //opject props close to history 
    const history = useHistory()
    const handleChange=()=>{
        // props.history.push("/about-us")
        history.push("/about-us")
    }
    return (
        <div>
                        <br/>

            Contact Us
            <br/>
            <br/>
            
            <button onClick={()=>{handleChange()}} className="btn btn-success">Route To About Us</button>
        </div>
    );
}

export default ContactUs;
