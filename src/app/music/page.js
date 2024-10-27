import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cookies } from 'next/headers';
import Image from "next/image";
import musicPlay from "@/assets/images/musicPlay.svg"

export default async function Music() {
    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")
    // console.log(token.value);
    const response = await fetch("https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
        {
            headers: {

                Authorization: 'Bearer ' + token.value
            },
        })
    const data = await response.json();
    console.log("daaaataaaaaa", data.tracks);

    return (
        <>
            <Header />
            <h1 className="text-[3em] pl-[.5em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#E71858]">All Songs</h1>
            {data.tracks.map((track)=>(
                <>
                    <div className="flex justify-between p-[2em]">
                        <div className="flex">
                            <div>
                                <Image height={40} width={40} src={musicPlay} alt="play" />
                            </div>
                        <div className="ml-[1.5em]">
                            <h2 className="text-[1.2em] font-bold ">Song Title</h2>
                                <span>{track.album.artists[0].name}</span>
                            </div>
                        </div>
                        <div>
                            <span>Time</span>
                        </div>
                    </div>
                </>
            ))}
            
            <Footer/>
        </>
    )
}