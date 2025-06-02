import Image from "next/image";
import ArrowRight from "./../assets/arrow-right.svg";
import Menu from "./../assets/menu.svg";
import logo from "./../assets/logosaas.png";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center bg-black h-10 py-3">
        <span className="hidden md:inline text-white/60 px-2">
          Streamline your workflow and boost your productivity.
        </span>
        <span className="text-white">Get started here for free</span>
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
      <div className="flex justify-between items-center p-2">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <button className="bg-black text-white p-2 rounded-md">Get for free</button>
        </nav>
        <Menu className="inline sm:hidden w-5 h-5" />
      </div>
    </header>
  );
};
