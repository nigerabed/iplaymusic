 import Image from "next/image";
import Link from "next/link";



export default function NewReleases({albums}) {

    
    return (
        <>
        <h3>New Releases</h3>
            {albums.map(album => <div className="flex justify-between p-[2em]">
                <div className="flex">
                    <div>
                        <img src={album.images[1].url} height={80} width={80} alt="play" />
                    </div>
                    <div className="ml-[1.5em]">
                        <Link href={`/playing/`}>
                            <h2 className="text-[1.2em] font-bold truncate text-ellipsis overflow-hidden ">
                                {album.name}
                                </h2>
                        </Link>
                        <span>{album.name}</span>
                    </div>
                </div>
                <div>
                    <span>{album.total_tracks} Songs</span>
                </div>
            </div>

                )}
            
        </>
    )
}