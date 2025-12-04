import { useState } from "react";

const intialData = {
    name: "",
    message: ""
}

export default function ContactForm() {
    const [contact, setContact] = useState(intialData);

    function handleNameChange(e) {
        setContact({
            name: e.target.value,
            message: contact.message
        });
    }

    // Spread Syntax
    function handleMessageChange(e) {
        setContact({...contact, message: e.target.value});
    }

    return (
        <div>
            <h1>Contact Form</h1>      
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
                <br />
                <input type="text" placeholder="Messege" value={contact.message} onChange={handleMessageChange} />
            </form>
            <h1>Contact Detail</h1>
            <p>Name : {contact.name}</p>
            <p>Message : {contact.message}</p>
        </div>
    )

}