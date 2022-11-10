import { Avatar, Dropdown, Navbar as NavTag } from 'flowbite-react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
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

        { pageName: 'Blogs', link: '/blogs', id: 4 },
    ];
    const protectedPage = [
        { pageName: 'Add Service', link: '/addservice', id: 1 },
        { pageName: 'My Reviews', link: '/myreviews', id: 2 },
    ];

    return (
        <div className="sticky top-0 left-0 z-50">
            <NavTag className="bg-slate-500 ">
                <NavTag.Toggle />
                <Link to="./" className="flex">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Ace-Legal
                    </span>
                </Link>
                <div className="flex md:order-2 items-center">
                    {/* sign in - sign up */}
                    <div className=" hidden md:flex dark:text-white">
                        {user?.uid ? (
                            <li className="list-none">
                                <button
                                    onClick={handleClick}
                                    type="button"
                                    className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
                                >
                                    logout
                                </button>
                            </li>
                        ) : (
                            <div className="flex mx-5">
                                <li className="list-none">
                                    <Link
                                        to="/signin"
                                        className="mr-2 text-black dark:text-white underline "
                                    >
                                        SignIn
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/signup" className="text-black dark:text-white">
                                        <button
                                            type="button"
                                            className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
                                        >
                                            SignUp
                                        </button>
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
                            <Avatar alt="user image" img={user?.photoURL || AvatarImg} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <div className="  dark:text-white">
                                {user?.uid ? (
                                    <li className="list-none">
                                        <button
                                            onClick={handleClick}
                                            type="button"
                                            className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
                                        >
                                            logout
                                        </button>
                                    </li>
                                ) : (
                                    <div className="flex flex-col gap-2 mx-5">
                                        <li className="list-none underline">
                                            <Link
                                                to="/signin"
                                                className="mr-2 text-black dark:text-white "
                                            >
                                                SignIn
                                            </Link>
                                        </li>
                                        <Dropdown.Divider />
                                        <li className="list-none underline">
                                            <Link
                                                to="/signup"
                                                className="text-black dark:text-white"
                                            >
                                                <button
                                                    type="button"
                                                    className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
                                                >
                                                    SignUp
                                                </button>
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </div>
                        </Dropdown.Header>
                    </Dropdown>
                </div>

                <NavTag.Collapse className="md:space-x-1">
                    <div className="flex gap-3">
                        {pages.map((page) => (
                            <li
                                className=" rounded px-1 py-2 ml-0 hover:dark:text-black hover:bg-[#d3ecf3] transition ease-in-out delay-150 hover:shadow-lg  "
                                key={page.id}
                            >
                                <NavLink
                                    to={page.link}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'bg-[#0097C3]   text-white px-3 py-2  rounded shadow-lg '
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
                                    className=" rounded px-1 py-2  hover:dark:text-black hover:bg-[#d3ecf3] transition ease-in-out delay-150 hover:shadow-lg  "
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
                    </div>
                </NavTag.Collapse>
            </NavTag>
        </div>
    );
}
