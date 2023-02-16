import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { getL1 } from '../util/api';

import './levels.css';

const Level1 = () => {




    const { isLoading, error, data } = useQuery({
        queryKey: ['l1'],
        queryFn: getL1
    })


    // console.log(data?.data?.data)


    return (
        <div className="levelDetailPage">



            {/* paste */}



            <div className="col overflow">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Level 1 files</h6>
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

                                        {
                                            data?.data?.data?.attributes?.files?.data?.map(file => (

                                                //     // console.log(res),
                                                <tr>

                                                    <td>

                                                        <Link to={`http://192.168.100.38:1337${file.attributes.url}`} >
                                                            <p className="text-sm align-middle text-center  font-weight-bold mb-0">

                                                                {file.attributes.name}
                                                                {/* name of the file here */}
                                                            </p>


                                                        </Link>

                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">
                                                            {file.attributes.name}
                                                        </span>
                                                    </td>



                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>

                            {/* data?.data?.attributes?.files?.data.map(file => ( */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Level1
