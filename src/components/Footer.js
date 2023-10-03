import React, { useState } from 'react';


function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail(email)) {
            sendEmailToEndpoint(email);
            setIsSubscribed(true);
        } else {
            alert("wrong email format")
        }
    };

    const sendEmailToEndpoint = (email) => {
        fetch("http://localhost:3001/subscribe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Math.random() * 1000,
                email: email
            })
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Email subscribed successfully.');
                } else {
                    console.error('Email subscription failed.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <footer className="footer">
            <div className='footer-section disp-info'>
                <div className="footer-content">
                    <h2>HIERONYMUS BOSCH</h2>
                    <p>Online Gallery</p>
                </div>
                <div className="footer-content subscription">
                    {isSubscribed ? (
                        <p>Thanks for subscribing</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Subscribe to our newsletter:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    )}
                </div>
                <div className="footer-content">
                    <p>Follow us</p>
                    <a href="https://www.hieronymus-bosch.org/" target="_blank" rel="noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30px" height="30px"><path d="M16,2.105l-0.274-0.222c0,0-1.109,0.747-1.752,0.814c-0.619-0.657-1.503-1.064-2.483-1.064c-1.88,0-3.405,1.511-3.405,3.374	c0,0.263,0.031,0.52,0.088,0.769c-2.829-0.14-4.578-1.79-6.256-3.832L1.201,2.272c0,0-0.457,1.339-0.457,2.766	c0,3.841,3.03,6.143,4.179,6.693c-1.294,1.139-4.401,0.984-4.401,0.984L0,13.337C0,13.337,1.885,15,5.22,15	c6.262,0,9.689-4.615,9.689-9.604c0-0.146-0.005-0.292-0.013-0.434C15.653,4.105,16,3.214,16,2.105z" /></svg></a>
                    <a href="https://www.hieronymus-bosch.org/" target="_blank" rel="noreferrer">
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg></a>
                    <a href="https://www.hieronymus-bosch.org/" target="_blank" rel="noreferrer"><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" /></svg></a>
                </div>
            </div>
            <div className="footer-section creator"><p>Created by @nnimmoo</p></div>
        </footer>
    );
}

export default Footer;
