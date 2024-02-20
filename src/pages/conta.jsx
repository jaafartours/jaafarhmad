import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send email using EmailJS
        emailjs.sendForm("service_y2symzf", "template_chuwjgd", e.target, "g0P2tq6qtFJgAjc4T")
            .then((result) => {
                console.log(result.text);
                // Optionally, reset the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.error(error.text);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
