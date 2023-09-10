/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import { AuthContext } from '../../../../routes/Auth/AuthProvider/AuthProvider';

const Submenu = ({ items }) => {

    return (
        <ul className="p-2">
            {items.map((item, index) => (
                <li key={index}>
                    <Link to={`/submenu/${item.toLowerCase()}`}>{item}</Link>
                </li>
            ))}
        </ul>
    );
};

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext);

    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [parentSubmenuVisible, setParentSubmenuVisible] = useState(false);

    const submenuItems = ['Oil Change 1', 'Submenu 2'];
    const parentSubmenuItems = ['Oil Change 1', 'Submenu 2'];

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setSubmenuVisible(!submenuVisible)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    {submenuVisible && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="#" onClick={() => setParentSubmenuVisible(!parentSubmenuVisible)}>
                                    Services
                                </Link>
                                {parentSubmenuVisible && <Submenu items={parentSubmenuItems} />}
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/booking">Bookings</Link>
                            </li>
                        </ul>
                    )}
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="Logo" className="h-8" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Services</summary>
                            <Submenu items={submenuItems} />
                        </details>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>

                    <li>
                        <Link to="/booking">Bookings</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><span>{user.email}</span><Link onClick={handleLogOut} className="btn">Log Out</Link></> :
                        <><Link to="/login" className="btn">Login</Link></>
                }
            </div>
        </div>
    );
};

export default Navigation;
