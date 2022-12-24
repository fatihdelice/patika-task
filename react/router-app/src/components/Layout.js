import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "blue" : "dark",
                            })}
                            end
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "blue" : "dark",
                            })}
                            to='about'
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "blue" : "dark",
                            })}
                            to='users'
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
                <hr />
            </nav>
            <Outlet />
        </div>
    )
}
