import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchByDepartmentAndLevel } from '../util/api';

const QALevelDetailPage = () => {

    // get the query parameter in the query string 
    let { level } = useParams();
    // fetch the data using the depatment and Level 

    // console.log(level)

    const { isLoading, error, data } = useQuery({
        queryKey: ['qadocs', 'QA', level],
        queryFn: fetchByDepartmentAndLevel('QA', level)
    });



    console.log(data)


    return (
        <div className="col overflow">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-header pb-0">
                        <h6>Quality Assurrence Files</h6>
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
                                        // fetchByDepartmentAndLevel('QA', level).then(response => {
                                        //     console.log(response?.data)
                                        // })
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

export default QALevelDetailPage