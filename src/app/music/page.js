import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import SongItem from "@/components/SongItem";
import playlistImg from "../../assets/images/playlist.png";
import Image from "next/image";
import ThemeButton from "@/components/ThemeButton";

export default async function Music() {
  const cookieStore = cookies();
  const token = cookieStore.get("iplay_token");
  // console.log(token.value);
  const response = await fetch(
    "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
    {
      headers: {
        Authorization: "Bearer " + token.value,
      },
    }
  );
  const data = await response.json();
  // console.log("daaaataaaaaa", data.tracks);

  function truncateString(str, maxLength = 15) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  return (
    <>
      <Image
        src={playlistImg}
        height={200}
        width={200}
        alt="backroundImg"
        className="h-[25em] w-[100%] absolute -z-10 "
      />
      <div>
      <ThemeButton/>
        <Header />

        <h1 className="text-[3em] pl-[.5em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#E71858]">
          All Songs
        </h1>
      </div>
      <div className="mb-[10vh]">
        {data.tracks.map((track) => (
          <SongItem
          key={track.id}
            trackId={track.id}
            albumName={truncateString(track.album.name)}
            artistName={track.album.artists[0].name}
            trackDuration={track.duration_ms}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
