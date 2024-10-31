import FeaturedAlbums from '@/components/FeaturedAlbums';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewReleases from '@/components/NewReleases';
import { cookies } from 'next/headers';

export default async function Albums(){

    
    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")
    // console.log(token.value);
    const response = await fetch("https://api.spotify.com/v1/browse/new-releases",
        {
            headers: {

                Authorization: 'Bearer ' + token.value
            },
        })
    const newReleasesAlbums = await response.json();


    return(
        <>
        <Header/>
            <h1 className="text-[3em] pl-[.5em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#E71858]">All Albums</h1>
            <FeaturedAlbums/>
            <NewReleases albums={newReleasesAlbums.albums.items}/>

        <Footer/>
        </>
    )
}