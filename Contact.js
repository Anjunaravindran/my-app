import React from "react";

function Contact(props)
{
    return(
        <div>
            <h3>{props.name} Contact</h3>
            <label>Enter Email Id</label>
            <input type="text"/><br/><br/>
            <label>Message</label><br/><br/>
            <textarea></textarea><br/>
            <button>Send</button>

        </div>
    )
}

export default Contact;