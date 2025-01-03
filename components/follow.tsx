import Image from "next/image";
import Link from "next/link";
import flLogo from "@/public/images/fl-logo.svg";
import magLogo from "@/public/images/mag1.png";
import twitterLogo from "@/public/images/twitterlogo.svg";

export default function Follow() {
    return (
        <>
            <div className="nes-container is-dark is-rounded w-fit  bg-gray-900/90 bg-opacity-65">
                <div className="flex gap-8 justify-start">                  
                    <p className="mt-2" ><b>Follow Us</b></p>
                    <Link title="FirstDevs on X" className="mb-4" href="https://x.com/firstdevs">
                        <Image src={twitterLogo} width={36} height={36} alt="X (Formerly Twiiter)" />
                    </Link>
                </div>
                <div className="flex gap-8 justify-center">
                    <p className="" ><b>Create Trust Lines</b></p>
                    <Link title="FirstDevs on FirstLedger" href="https://firstledger.net/token/rKxsFDVBVpemrPY2ahCcTzBouLxFRX9BPb/4649525354444556530000000000000000000000">
                        <Image src={flLogo} width={24} height={24} alt="First Devs Logo" />
                    </Link>
                    <Link title="FirstDevs on XMagnetic" href="https://xmagnetic.org/tokens/FIRSTDEVS+rKxsFDVBVpemrPY2ahCcTzBouLxFRX9BPb?network=mainnet">
                        <Image src={magLogo} width={24} height={24} alt="First Devs Logo" />
                    </Link>
                </div>
            </div>
        </>
    );
}