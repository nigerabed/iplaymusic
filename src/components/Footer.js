import Image from "next/image";
import pulse from "../assets/images/pulse.svg"
import microphone from "../assets/images/microphone.svg"
import wifi from "../assets/images/wifi.svg"
import settings from "../assets/images/settings.svg"
import music from "../assets/images/music.svg"
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="fixed bottom-0 bg-white z-[10] flex justify-around h-[10vh] w-full p-[1rem] shadow-[-20px_0px_10px_6px_lightgrey]">
            <Link href="catagories">
                <Image alt="pulse" src={pulse} height={40} width={40} />
            </Link>
            <Link href="featured">
                <Image src={microphone} height={30} width={30} alt="microphone" />
            </Link>
            <Link href="playlist">
                <div className="relative bg-[#F42C4D] rounded-full h-[3.7em] w-[3.7em] mb-[.5em]">
                    <Image className="absolute top-[.5em] p-2 left-[1em]" layout="fill" src={wifi} alt="wifi" />
                </div>
            </Link>
            <Link href="music">
                <Image src={music} height={40} width={40} alt="music" />
            </Link>
            <Link href="albums">
                <Image src={settings} height={40} width={40} alt="settings" />
            </Link>
        </footer>
    )
}