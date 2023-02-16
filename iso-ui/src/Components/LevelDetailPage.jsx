import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router'
import { fetchLevelById } from '../util/api'

const LevelDetailPage = () => {

    const { levelId } = useParams();

    console.log(levelId)

    // const { isLoading, error, data } = useQuery({
    //     queryKey: [levelId],
    //     queryFn: fetchLevelById
    // });

    const { isLoading, error, data } = useQuery({
        queryKey: ['levelWithId', levelId],
        queryFn: () => fetchLevelById(levelId)
    })


    console.log(data)


    return (
        <div className="levelDetailPage">
            this is the level detail page
        </div>
    )
}

export default LevelDetailPage
