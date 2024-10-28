"use client"

import { usePathname, useRouter } from "next/navigation"

import { useEffect, useState } from "react";


export default function Header() {
    const [title, setTitle] = useState();
    const pathName = usePathname().split("/")[1]
    const router = useRouter()


    useEffect(() => {
        setTitle(pathName.toUpperCase())
    }, [])

    return (
        <header className="flex justify-between h-[10vh] p-[2em] mb-[2em] mt-[1em]">
            <div onClick={() => router.back()}>
                <svg className="h-[2em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#999999" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
            </div>
            <span className="text-[1.2em] text-grey">{title}</span>
            <svg className="h-[2em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#949494" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </header>
    )
}