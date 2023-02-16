
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllMediaFiles } from '../util/api';
import "./MainContainerNav.css";

const MainContainerNav = () => {

    const location = useLocation();
    const currentLocation = location.pathname.slice(1);
    const [files, setFiles] = useState(null);
    // console.log(currentLocation)

    const [inputText, setInputText] = useState("");

    const [isClosed, setIsClosed] = useState(true);
    let inputHandler = (e) => {
        //convert input text to lower case;
        setIsClosed(false);
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const hancleModalClose = () => {
        setIsClosed(true);
    }

    const filtered = files?.filter(el => {
        return el.name.toLowerCase().includes(inputText)
    });
    console.log(filtered)



    useEffect(() => {
        getAllMediaFiles().then(file => {
            setFiles(file?.data)
        })

    }, []);

    console.log(files)




    return (
        <div className="mainContainerNav">
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                <div className="container-fluid py-1 px-3" style={{
                    "maxWidth": "80% !important"
                }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="#">Home</a></li>
                            {/* get the current url and pass it on bread crumbs */}
                            <li className="breadcrumb-item text-sm text-white active" aria-current="page">{currentLocation}</li>
                        </ol>
                        <h6 className="font-weight-bolder text-white mb-0">{currentLocation}</h6>
                    </nav>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group">
                                <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                <input type="text" onChange={inputHandler} className="form-control" placeholder="Type here..." />
                            </div>

                            {
                                isClosed ? null :
                                    (
                                        <div id="myModal" className="modal">
                                            {/* <!-- Modal content --> */}
                                            <div class="modal-content">
                                                <span onClick={hancleModalClose} class="close">&times;</span>
                                                <p>Searching</p>


                                                {
                                                    filtered.length === 0 ? (<p>File not found</p>) :

                                                        filtered.map(file => (
                                                            <Link to={`http://localhost:1337${file?.url}`} target="_blank" key={file?.id}>{file?.name}</Link>
                                                        ))

                                                }
                                            </div>

                                        </div>
                                    )
                            }




                        </div>


                        <ul className="navbar-nav  justify-content-end">


                            <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                <a href="#" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bell cursor-pointer"></i>
                                </a>

                            </li>
                        </ul>
                    </div>


                </div>


            </nav >


        </div >
    )
}

export default MainContainerNav
