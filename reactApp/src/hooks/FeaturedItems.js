import React, { useEffect, useState } from 'react'

const useFetchItems = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return posts;
}

export default useFetchItems;