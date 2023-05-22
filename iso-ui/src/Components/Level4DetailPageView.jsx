import React from 'react'
import { Link } from 'react-router-dom'

const Level4DetailPageView = ({ faLevelsFiles }) => {

    console.log(faLevelsFiles)
    return (
        <div className="col overflow">
            <div className="col-12">
                <div className="card mb-4">

                    {/* title */}
                    <div className="card-header pb-0">
                        <h6>Forms</h6>
                    </div>

                    {/* add the forms and register tables */}

                    {/* check if we are in level 4  */}

                    <div className="card-body px-2 pt-2 pb-2">
                        {/* insert some file card here  */}
                        <div className="levelFiles">


                        </div>


                        {/* Forms */}
                        <div className="table-responsive p-0">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                        <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>


                                    </tr>
                                </thead>
                                <tbody>

                                    {/* <h1>Forms table files</h1> */}

                                    {
                                        // function isBigEnough(value) {
                                        //     return value >= 10;
                                        //     }
                                            
                                            faLevelsFiles.filter((doc) => {
                                                return doc.attributes.isForm === true
                                            }).map(file => {

                                                // console.log(file.attributes.file.data.attributes.url)

                                                return (
                                                    <tr key={file?.id}>

                                                        <td>

                                                            <Link to={`http://192.168.100.10:1337${file?.attributes?.file?.data?.attributes?.url}`} >
                                                                <p className="text-sm   font-weight-bold mb-0">

                                                                    {file?.attributes?.file?.data?.attributes?.name}

                                                                </p>


                                                            </Link>

                                                        </td>
                                                        <td className="">
                                                            <span className="text-secondary text-xs font-weight-bold">
                                                                {file?.attributes?.description}
                                                            </span>
                                                        </td>



                                                    </tr>
                                                )



                                            })
                                    }

                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>


                <div className="card mb-4">
                    {/* Reigisters */}
                    <div className="card-header pb-0">
                        <h6>Registers</h6>
                    </div>

                    <div className="table-responsive p-0">
                        <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th className="  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                    <th className=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>


                                </tr>
                            </thead>
                            <tbody>

                                {/* <h1>Rigisters table files</h1> */}

                                {
                                    faLevelsFiles.filter((doc) => {
                                        return doc.attributes.isForm !== true
                                    }).map(file => {

                                        // console.log(file.attributes.file.data.attributes.url)

                                        return (
                                            <tr key={file?.id}>

                                                <td>

                                                    <Link to={`http://192.168.100.10:1337${file?.attributes?.file?.data?.attributes?.url}`} >
                                                        <p className="text-sm   font-weight-bold mb-0">

                                                            {file?.attributes?.file?.data?.attributes?.name}

                                                        </p>


                                                    </Link>

                                                </td>
                                                <td className="">
                                                    <span className="text-secondary text-xs font-weight-bold">
                                                        {file?.attributes?.description}
                                                    </span>
                                                </td>



                                            </tr>
                                        )



                                    })
                                }
                                

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
        
    )
}

export default Level4DetailPageView