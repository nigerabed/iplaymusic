import Link from "next/link";


export default function CategoryPlaylist({ playlist }) {

    return (
        <>
            <Link href="/playlists/37i9dQZF1DXbLJ4V4LNcKE"><p>Blue Rocks</p></Link>
            {playlist.map(item => <p>{item.name}</p>)}
        </>
    )
}