import logo from "../assets/images/music-logo.png"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-between m-[2em] w-[50em]">
          <button className="h-[2em] w-[4em] bg-[#F32C4F] rounded-[.5em] text-[1.5em] font-bold text-white">Menu</button>
          <button className="h-[2em] w-[6em] bg-[lightgrey] rounded-[.5em] text-[1.5em]">Light mode</button>
        
        </div>

        <Image src={logo} alt="logo" height={300} width={300} className="m-auto mt-[20em]" />
        <h1 className="text-[2.5em] font-bold mt-[1em]">iPlayMusic</h1>
        <a href="https://accounts.spotify.com/authorize?response_type=code&client_id=d94689bc83fe4440ba36cddca35f055a&redirect_uri=http://localhost:3000/api/callback"

          className="h-[2em] w-[70%] mt-[2em] text-center border-4 border-[#9D9898] rounded-[2em] text-[3.5em] font-bold text-[#5E5E5E] shadow-[-10px_0px_10px_6px_lightgrey]">Log in</a>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="215.963"><path d="M29.215 82.985c0-8.202-6.369-14.786-14.302-14.786S.5 74.783.5 82.985v96.105c0 15.016 5.922 27.145 16.201 33.267 4.581 2.772 9.72 4.043 15.084 4.043 6.704 0 13.855-2.08 20.894-6.238l130.39-77.854c10.839-6.469 17.431-18.135 17.431-31.073 0-12.937-6.48-24.603-17.318-31.072L70.668 2.473C63.852-1.685 55.025.741 51.115 7.787c-4.023 7.046-1.676 16.172 5.14 20.214l72.737 43.78c9.273 6.699 14.748 17.672 14.748 29.454 0 11.205-4.804 21.486-13.184 28.185l-52.85 31.535c-10.167 4.62-21.564 4.043-31.396-1.733-10.726-6.353-16.871-17.673-17.095-30.38V82.986Z" fill-rule="evenodd" fill="url(&quot;#a&quot;)" transform="translate(-.5 -.437)" data-name="Path 651" /><defs><linearGradient x1=".5" y1="0" x2=".5" y2="1" id="a"><stop stop-color="#ee0979" offset="0" /><stop stop-color="#ff6a00" offset="1" /></linearGradient></defs></svg> */}
    </>
  );
}