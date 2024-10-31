import { redirect } from "next/navigation";

import { cookies } from 'next/headers';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Player({ params }) {

    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")

    if (token == "") {
        redirect("/")
    }
    // console.log(token.value);
    const url = "https://api.spotify.com/v1/tracks/" + params.player;
    const response = await fetch(url,
        {
            headers: {

                Authorization: 'Bearer ' + token.value
            },
        })
    const song = await response.json();

    // console.log(url);
    // console.log(token.value)
    //console.log("player data", song);


    return <div className="h-screen">
        <Header />
        <div
            style={{ '--image-url': `url(${song.album.images[0].url})` }}
            className='bg-[image:var(--image-url)] h-[90%] bg-no-repeat'>

            <div className="absolute bottom-[13em] left-[3em]">
                <div className=" min-h-12 text-white">
                    <p className=" font-extrabold text-[1.4em]">{song.name}</p>
                    <p className=" text-[1.4em]">{song.artists[0].name}</p>
                </div>
                <div className=" w-[90%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-red-600 h-2.5 rounded-full w-[45%]"></div>
                </div>
                <div className="flex justify-between text-white mt-[1em]">
                    <span>00</span>
                    <span>00</span>
                </div>
            </div>
        </div>
        <Footer />

    </div>
}