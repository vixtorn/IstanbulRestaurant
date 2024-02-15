import React from 'react';
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt="logo" />
                    <p>We are a family owned Turkish cusine restaurant, focused on traditional Turkish recipes served with passion.</p>
                </div>
                <div>
                    <h3>Our Links</h3>
                    <ul>
                        <li>
                            <a href=''>Home</a>
                        </li>
                        <li>
                            <a href=''>About</a>
                        </li>
                        <li>
                            <a href=''>Menu</a>
                        </li>
                        <li>
                            <a href=''>Reservation</a>
                        </li>
                        <li>
                            <a href=''>Order Online</a>
                        </li>
                        <li>
                            <a href=''>Login</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            Address: <br/>  Asmali Mescit, Istiklal Cd. Aznavur Pasaji No:110 No:92 Kat:3, 34430 Beyoglu/Istanbul
                        </li>
                        <li>
                            Phone: <br/>  +90 0619 123 12 12 
                        </li>
                        <li>
                            E-Mail: <br/>  info@littlelemonistanbul.com
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Follow us on social media!</h3>
                    <ul>
                        <li>
                            <a href='/'>Instagram</a>
                        </li>
                        <li>
                            <a href='/'>Facebook</a>
                        </li>
                        <li>
                            <a href='/'>Youtube</a>
                        </li>
                        <li>
                            <a href='/'>Twitter</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;