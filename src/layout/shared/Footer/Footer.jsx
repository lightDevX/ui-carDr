// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Footer = () => {

    const services = [
        'Branding',
        'Design',
        'Marketing',
        'Advertisement'
    ];

    const companyLinks = [
        { title: 'About us', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Jobs', url: '/jobs' },
        { title: 'Press kit', url: '/press' }
    ];

    const legalLinks = [
        { title: 'Terms of use', url: '/terms' },
        { title: 'Privacy policy', url: '/privacy' },
        { title: 'Cookie policy', url: '/cookie' }
    ];

    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link to='/'><img src={logo} alt="" /></Link>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 2017</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                {services.map((service, index) => (
                    <Link key={index} className="link link-hover">{service}</Link>
                ))}
            </div>
            <div>
                <span className="footer-title">Company</span>
                {companyLinks.map((link, index) => (
                    <Link key={index} className="link link-hover" to={link.url}>{link.title}</Link>
                ))}
            </div>
            <div>
                <span className="footer-title">Legal</span>
                {legalLinks.map((link, index) => (
                    <Link key={index} className="link link-hover" to={link.url}>{link.title}</Link>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
