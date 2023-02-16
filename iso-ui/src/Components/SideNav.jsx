import React from 'react';
import { Link, } from 'react-router-dom';
import Logo from './logo.png';





const SideNav = () => {


    return (
        <div className="sideNav">

            <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" to="# " >
                        <img src={Logo} className="navbar-brand-img h-200" alt="main_logo" />
                        {/* <span className="ms-1 font-weight-bold">ISO Approved Documents</span> */}
                    </Link>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " to="/ops">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Operations</span>
                            </Link>
                        </li>

                        {/* <Route exact path="/ops/" element={<OpsLevels />} />
                        <Route exact path="/finance-admin/" element={<FinanceAdminLevels />} />
                        <Route exact path="/qa/" element={<QALevels />} /> */}
                        {/* ManagementLevels */}
                        {/* <Route exact path="/manegement/" element={<ManagementLevels />} /> */}
                        <li className="nav-item">
                            <Link className="nav-link " to="/finance-admin">
                                <div className="icon icon-shapeimg icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Finance and Admin</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/qa">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Quality Assurrence</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/manegement">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-app text-info text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Management</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

        </div>
    )
}

export default SideNav
