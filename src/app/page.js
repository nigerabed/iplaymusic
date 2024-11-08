import ThemeButton from "@/components/ThemeButton";
import logo from "../assets/images/music-logo.png"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-between m-[2em] w-[50em]">
          <ThemeButton />
        </div>

        <Image src={logo} alt="logo" height={100} width={100} className="m-auto mt-[2em]" />
        <h1 className="text-[2em] font-bold mt-[1em]">iPlayMusic</h1>
        <a href="https://accounts.spotify.com/authorize?response_type=code&client_id=d94689bc83fe4440ba36cddca35f055a&redirect_uri=http://localhost:3000/api/callback"

          className="h-[2em] w-[40%] mt-[1em] text-center border-4 border-[#9D9898] rounded-[2em] text-[1.5em] font-bold text-[#5E5E5E] shadow-[-10px_0px_10px_6px_lightgrey]">Log in</a>
      </div>

    </>
  );
}