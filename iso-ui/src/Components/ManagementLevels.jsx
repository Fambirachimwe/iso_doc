import React from 'react';
import { Link } from 'react-router-dom';

const ManagementLevels = () => {
    return (
        <div className='managmentLevels'>
            <div className="levels">

                {/* levels cards  */}
                <div className="row">
                    {/* level 1 */}

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <Link to="/levels/1">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <h5 className="font-weight-bolder">Level 1</h5>

                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                                <i
                                                    className="ni ni-money-coins text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Level 2 */}

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <Link to="/levels/2">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <h5 className="font-weight-bolder">Level 2</h5>

                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                                <i
                                                    className="ni ni-world text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* level 3 */}
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <Link to="/levels/3">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <h5 className="font-weight-bolder">Level 3</h5>

                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                                <i
                                                    className="ni ni-paper-diploma text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* level 4 */}
                    <div className="col-xl-3 col-sm-6">
                        <Link to="/levels/4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <h5 className="font-weight-bolder">Level 4</h5>

                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                                <i
                                                    className="ni ni-app text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>

                                                {/* <i className="ni ni-app text-info text-sm opacity-10"></i> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* table displaying all the files from the Levels folder */}

                <br />
                <br />

                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header pb-0">
                                <h6>All files from the levels directory</h6>
                            </div>

                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className=" align-middle text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Title
                                                </th>
                                                <th className="align-middle text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Description
                                                </th>
                                                <th className="align-middle text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Download
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManagementLevels