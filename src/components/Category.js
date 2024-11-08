"use client"
import { useEffect, useState } from 'react';
 import CategoryPlaylist from './CategoriyPlaylist';
 


export default function Category({ id, name, categoryplaylist,cookieToken }) {



    const [selected, setSelected] = useState(null)

    const randomColors = ['#FF5733', '#33FF57', '#FF33FF', '#33A8FF', '#A833FF', '#FFA833'];

    function handleSelectCategory(selectedCategoryId) {
        setSelected(selectedCategoryId === selected ? null : selectedCategoryId)
    }

    const [mounted, setMounted] = useState(false);
 
    useEffect(() => {
        setMounted(true);
    }, []);
 
    if (!mounted) return null;


    return (
        <>
        
                 <div onClick={() => handleSelectCategory(id)}
                    className=" w-[70%] ml-[4em] text-white font-bold flex justify-between" key={id}
                    style={{
                        backgroundColor: randomColors[Math.floor(Math.random() * randomColors.length)],
                        padding: '10px',
                        borderRadius: '5px',
                        marginBottom: '8px',
                    }}>
                    <span> {name}</span>
                    <span>. . .</span>
                </div>
           
            {selected === id ?
                <div>
                    <CategoryPlaylist cookieToken={cookieToken} id={id} playlist={categoryplaylist} />
                </div>
                : null}

        </>

    )
}
