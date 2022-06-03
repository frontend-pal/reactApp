import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const ProductDescription = () => {
    const { itemId } = useParams();

    useEffect(() => {
        console.log(itemId);
    }, [itemId])

    return (
        <>
            <p>
                test de app
            </p>
        </>
    )
}
