import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeButton from '@/components/ThemeButton';
import { cookies } from 'next/headers';
import Link from 'next/link';



export default async function featuredPlay() {


    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")
    console.log(token.value);
    const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {

            Authorization: 'Bearer ' + token.value
        }
    })
    const data = await response.json()
    //console.log(data.playlists.items);


    return (
        <>
         <ThemeButton/>
            <Header />
            <main className="overflow-y-scroll h-[75vh] mb-[10em]">


                <div className="flex flex-col items-center h-full">
                    <div className="w-full pl-[2em]">
                        <h1 className="mb-[0.5em] text-[3em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#E71858]">Featured</h1>

                    </div>

                    {data.playlists.items.map(item => (
                        <>
                        <Link href={item.external_urls.spotify} target="_blank">
                            <img src={item.images[0].url} className="h-[30em] rounded-[1em] object-cover" width={350} height={350} alt="playlist image" />
                        </Link>

                            {console.log(item.images[0].url)}
                            <p className="text-[1.4em] mb-[1em] text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#E71858] font-bold">{item.name}</p>
                        </>
                    ))}
                </div>

            </main>
            <Footer />
        </>
    )
}