"use client"
import { useState } from 'react';
import Link from "next/Link"
export default function Category({ id, name }) {
    const [selected, setSelected] = useState(null)

    const randomColors = ['#FF5733', '#33FF57', '#FF33FF', '#33A8FF', '#A833FF', '#FFA833'];

    function handleSelectCategory(selectedCategoryId) {
        setSelected(selectedCategoryId === selected ? null : selectedCategoryId)
    }

    return (
        <>
            <Link href="">
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
            </Link>
            {selected === id ?
                <div>
                    <p>Sub catagory</p>
                </div>
                : null}

        </>

    )
}