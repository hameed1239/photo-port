import React, {useState, useEffect} from "react";
import { validateEmail } from '../../utils/helpers';
function ContactForm() {
    //JSX
    //useState Hook
    const computedName = "name"
    const [formState, setFormState] = useState({ [computedName]: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }  
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        
    }
    useEffect(() => {
        console.log(formState)
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    

    return (
        <section>
            <h1 data-testid = "form-header">Contact me</h1>
            <form id="contact-form" onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor = "name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name = "name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>

    );
}

export default ContactForm