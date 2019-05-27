import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useResources = (resource) =>{
    const [resources, setResources] = useState([])

    // const fetchResource = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    //     setResources(response.data)
    // }

    useEffect(() => {
        // fetchResource(resource)

        // not allowed because use effect will not accept any async function
        // async () => {
        //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        //     setResources(response.data)
        // }
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(response.data)
        })(resource)
    }, [resource])
    return resources;
}