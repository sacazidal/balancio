import Image from "next/image";
import Link from "next/link";
import LoginBtn from "./LoginBtn";

const Header = () => {
  return (
    <header className="p-2 shadow hover:shadow-lg gap-4 transition-shadow duration-300">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center md:gap-1 gap-0">
          <h1 className="text-[clamp(1.25rem,4vw,1.875rem)] font-bold bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
            balancio.
          </h1>
          <Image
            src={"/Mercurial.webp"}
            alt="Mercurial"
            width={40}
            height={40}
            priority
            className="w-[clamp(1.75rem,6vw,2.5rem)] h-[clamp(1.75rem,6vw,2.5rem)]"
          />
        </Link>
        <LoginBtn />
      </div>
    </header>
  );
};
export default Header;
