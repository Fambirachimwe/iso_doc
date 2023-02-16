import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const FinanceLevelDetailPage = () => {

    const [faLevelsFiles, setFALevelFiles] = useState([]);
    let { level } = useParams();

    const BASER_URL = "http://localhost:1337/api";



    useEffect(() => {
        fetch(`${BASER_URL}/documents?filters[department][$eq]=FA&filters[level][$eq]=${level}&populate=*`)
            .then(response => response.json())
            .then(res => {
                setFALevelFiles([]);
                setFALevelFiles(res.data);

            })
    }, [level]);
    return (
        <div className="col overflow">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-header pb-0">
                        <h6>Finnace and Admin Files</h6>
                    </div>

                    <div className="card-body px-2 pt-2 pb-2">
                        {/* insert some file card here  */}
                        <div className="levelFiles">


                        </div>

                        <div className="table-responsive p-0">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className=" align-middle text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                        <th className="align-middle text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>


                                    </tr>
                                </thead>
                                <tbody>

                                    {/* render all the data here  */}
                                    {


                                        // console.log(data?.data?.data);
                                        faLevelsFiles.length > 0 ? (
                                            faLevelsFiles?.map(file => {

                                                // console.log(file.attributes.file.data.attributes.url)

                                                return (
                                                    <tr key={file?.id}>

                                                        <td>

                                                            <Link to={`http://localhost:1337${file?.attributes?.file?.data?.attributes?.url}`} >
                                                                <p className="text-sm align-middle text-center  font-weight-bold mb-0">

                                                                    {file?.attributes?.file?.data?.attributes?.name}

                                                                </p>


                                                            </Link>

                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <span className="text-secondary text-xs font-weight-bold">
                                                                {file?.attributes?.description}
                                                            </span>
                                                        </td>



                                                    </tr>
                                                )



                                            })
                                        ) : (
                                            <tr>


                                                <td className="align-middle text-center">
                                                    <span className="text-secondary text-xs font-weight-bold">
                                                        <h2>No Files</h2>
                                                    </span>
                                                </td>



                                            </tr>
                                        )



                                    }

                                </tbody>
                            </table>
                        </div>

                        {/* data?.data?.attributes?.files?.data.map(file => ( */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceLevelDetailPage