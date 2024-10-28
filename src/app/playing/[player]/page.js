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
    console.log("player data", song);


    return <div className="h-screen">
        <Header/>
        <div
            style={{ '--image-url': `url(${song.album.images[0].url})` }}
            className='bg-[image:var(--image-url)] h-[90%] bg-no-repeat'>

            <div className=" min-h-12 text-white">
                <p className="absolute bottom-[12em] left-[4em] font-extrabold text-[1.4em]">Playing.... {song.name}</p>
            </div>
        </div>
        <Footer />

    </div>
}