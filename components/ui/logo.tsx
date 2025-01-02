import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/fd.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="FirstDevs">
      <Image src={logo} alt="FirstDevs Logo" width={48} height={48} />
      <div className="align-text-bottom mt-5 -ml-2">irstDevs</div>
    </Link>
  );
}
