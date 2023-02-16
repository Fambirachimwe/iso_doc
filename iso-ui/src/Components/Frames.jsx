import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchFrames } from '../util/api';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Frames = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['levels'],
        queryFn: fetchFrames
    })

    // console.log(data?.data.data);
    return (
        <div className="finalForms">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="card-header pb-0">
                            <h6>Frames</h6>
                        </div>

                        <div class="card-body px-0 pt-0 pb-2">
                            <div class="table-responsive p-0">
                                <table class="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th class="  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                            <th class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                                            {/* <th class="align-middle text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Level</th> */}

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data?.data?.data?.map(res => {

                                                // console.log(res),


                                                <tr key={nanoid(10)}>

                                                    <td>

                                                        <Link to={`http://192.168.100.38:1337${res?.attributes?.file?.data?.attributes?.url}`} >
                                                            <p class="text-sm  font-weight-bold mb-0">

                                                                {res?.attributes?.file?.data?.attributes?.name}
                                                                {/* name of the file here */}
                                                            </p>


                                                        </Link>

                                                    </td>
                                                    <td class="">
                                                        <span class="text-secondary text-xs font-weight-bold">
                                                            {res?.attributes?.description}
                                                        </span>
                                                    </td>



                                                </tr>



                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frames
