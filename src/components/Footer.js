import Image from "next/image";
import pulse from "../assets/images/pulse.svg"
import microphone from "../assets/images/microphone.svg"
import wifi from "../assets/images/wifi.svg"
import contrast from "../assets/images/contrast.svg"
import settings from "../assets/images/settings.svg"


export default function Footer(){
    return(
        <div className="flex h-=[5em] w-[]">
            <Image alt="pulse" src={pulse} height={40} width={40}/>
            <Image src={microphone} height={40} width={40} alt="microphone"/>
            <div className="relative bg-[#F42C4D] rounded-full h-[5em] w-[5em]">
                <Image className="absolute top-[1em] p-2 left-[1em]" layout="fill" src={wifi} alt="wifi"/>
            </div>
            <Image src={contrast} height={20} width={20} alt="contrast"/>
            <Image src={settings} height={20} width={20} alt ="settings"/>
        </div>
    )
}