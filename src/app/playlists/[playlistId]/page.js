import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SongItem from '@/components/SongItem';

export default function playlist({ params }) {

    return <>

        <Header />
        {params.playlistId}
        <SongItem
            trackId="{track.id}"
            albumName="{track.album.name}"
            artistName="{track.album.artists[0].name}"
            trackDuration="123"
        />

        <Footer />
    </>

}