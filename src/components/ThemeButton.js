"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function ThemeButton(){
    const {resolvedTheme, setTheme} = useTheme()

 const [mounted, setMounted] = useState(false);
 
    useEffect(() => {
        setMounted(true);
    }, []);
 
    if (!mounted) return null;

    return(
        <button onClick={()=> setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="h-[2em] w-[5em] bg-slate-200 rounded-[1em] m-[1em] dark:text-red-600">
            {resolvedTheme === "dark" ? "light" : "dark"}
        </button> 
    )
}