import Footer from '@/components/Footer';
import { cookies } from 'next/headers'


export default async function featuredPlay(){

    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")
    console.log(token.value);
    const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {

            Authorization: 'Bearer ' + token.value
        }
    })
    const data = await response.json()
    console.log(data.playlists.items);

    return(
        <>
            <main>
                {data.playlists.items.map(item=>(
                    <p>{item.name}</p>
                ))}
                
            </main>
        <Footer />
        </>
    )
}