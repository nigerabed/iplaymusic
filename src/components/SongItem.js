import Link from 'next/link';
import Image from "next/image";
import musicPlay from "@/assets/images/musicPlay.svg"

export default function SongItem({ trackId, albumName ,artistName,trackDuration}){

    return(
        <div key={trackId} className="flex justify-between p-[2em]">
            <div className="flex">
                <div>
                    <Image height={40} width={40} src={musicPlay} alt="play" />
                </div>
                <div className="ml-[1.5em]">
                    <Link href={`/playing/${trackId}`}>
                        <h2 className="text-[1.2em] font-bold truncate text-ellipsis overflow-hidden ">{albumName}</h2>
                    </Link>
                    <span>{artistName}</span>
                </div>
            </div>
            <div>
                <span>{millisToMinutesAndSeconds(trackDuration)}</span>
            </div>
        </div>
    )
}

function millisToMinutesAndSeconds(millis) {

    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}