import Image from "next/image";
import Link from "next/link";

const Footers = () => {
  return (
    <footer className="bg-dark-alternate text-white  ">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="W-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className=" mt-8">
            Engineered for endurance and designed for speed. <br /> Experience
            gear that moves as fast as you do.
          </p>
        </div>
        <div className="w-105 grid grid-cols-2 ">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
