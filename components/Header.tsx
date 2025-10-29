import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
      <header className="sticky top-0 header">
      <div className="container header-wrapper">
        {/*  Header. */}
        <Link href="/" className="flex items-center space-x-2 py-3">
          <Image
            src="/favicon.ico"
            alt="Altrion Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
          <span className="text-lg font-semibold text-orange-400">Altrion</span>
        </Link>
        <nav className="hidden sm:block">{/* NavItems. */}
        <NavItems />
        </nav>
        {/* UserDropDownMenu. */}
        <UserDropDown />
      </div>
    </header>
  );
};

export default Header;
