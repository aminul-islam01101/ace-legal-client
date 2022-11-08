import { Avatar, Dropdown, Navbar as NavTag } from 'flowbite-react';

import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import Logo from '../assets/images/fav.ico';
import AvatarImg from '../assets/images/avatar.png';
import AuthContext from '../Contexts/AuthContext';

export default function Navbar() {
    const { logOut, user, setUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        logOut()
            .then(() => {
                toast.success('Sign-out successful.');
                setLoading(false);
                setUser(null);
                navigate('/');
            })
            .catch((er) => {
                console.error(er);
            });
    };

    const pages = [
        { pageName: 'Home', link: '/', id: 1 },
        { pageName: 'Services', link: '/services', id: 2 },
        { pageName: 'About', link: '/about', id: 3 },
        { pageName: 'Blogs', link: '/blogs', id: 4 },
    ];
    const protectedPage = [
        { pageName: 'Add Service', link: '/addservice', id: 1 },
        { pageName: 'My Reviews', link: '/myreviews', id: 2 },
    ];

    return (
        <div>
            <NavTag className="bg-slate-500">
                <NavTag.Toggle />
                <Link to="./" className="flex">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Ace-Legal
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {/* sign in - sign up */}
                    <div className="  dark:text-white">
                        {user?.uid ? (
                            <li className="list-none">
                                <button
                                    onClick={handleClick}
                                    type="button"
                                    className="button text-black"
                                >
                                    logout
                                </button>
                            </li>
                        ) : (
                            <div className="flex mx-5">
                                <li className="list-none">
                                    <Link to="/signin" className="mr-2 text-black dark:text-white ">
                                        SignIn
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/signup" className="text-black dark:text-white">
                                        SignUp
                                    </Link>
                                </li>
                            </div>
                        )}
                    </div>

                    {/* avatar dropdown */}

                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user?.photoURL || AvatarImg} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>

                <NavTag.Collapse>
                    {pages.map((page) => (
                        <li
                            className=" rounded px-1 py-2 hover:dark:text-black hover:bg-[#d3ecf3] transition ease-in-out delay-150 hover:shadow-lg  "
                            key={page.id}
                        >
                            <NavLink
                                to={page.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#0097C3]   text-white px-3 py-2 rounded shadow-lg '
                                        : ''
                                }
                            >
                                {page.pageName}
                            </NavLink>
                        </li>
                    ))}

                    {user?.uid &&
                        protectedPage.map((page) => (
                            <li
                                className=" rounded px-1 py-2 hover:dark:text-black hover:bg-[#d3ecf3] transition ease-in-out delay-150 hover:shadow-lg  "
                                key={page.id}
                            >
                                <NavLink
                                    to={page.link}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'bg-[#0097C3]   text-white px-3 py-2 rounded shadow-lg '
                                            : ''
                                    }
                                >
                                    {page.pageName}
                                </NavLink>
                            </li>
                        ))}
                </NavTag.Collapse>
            </NavTag>
        </div>
    );
}
