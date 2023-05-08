import { Miloco } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="error">
      <h2>404 - Page Not Found</h2>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <Image src={Miloco} alt="mi-loco-pal-home" />
        <h1>PARA EL HOME MI PANA</h1>
      </Link>
    </div>
  );
}
