import React from "react";
import {
    BsGrid1X2Fill,
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarB({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside
            id="sidebar"
            className={openSidebarToggle ? "sidebar-responsive" : ""}
        >
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <FaUser className="icon_header" /> username
                </div>
                <span className="icon close_icon" onClick={OpenSidebar}>
                    X
                </span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/dashb">
                        <BsGrid1X2Fill className="icon" /> Dashboard
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/caselists">
                        <BsFillArchiveFill className="icon" /> Case Lists
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/category">
                        <BsFillGrid3X3GapFill className="icon" /> Categories
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsPeopleFill className="icon" /> Customers
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsListCheck className="icon" /> Inventory
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsMenuButtonWideFill className="icon" /> Reports
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGearFill className="icon" /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default SidebarB;
