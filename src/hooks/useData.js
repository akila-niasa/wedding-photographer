import React, { useEffect, useState } from 'react';

const useData = () => {
    const [weddings, setWeddings] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWeddings(data))
    }, [])
    return [weddings, setWeddings]
};

export default useData;