import SmoothScroll from "@/lib/scroll";
import Logo from "./logo";

interface NavbarProps{
  setDialogOpen: (open: boolean) => void;
}

export default function NavBar(props: NavbarProps) {
  return <nav className="top-0 left-0 flex flex-row items-center justify-between h-10 m-4">
    <Logo />
    <ul className="hidden md:flex flex-row gap-4 items-center px-6 py-2 bg-white/20 text-neutral-900 rounded-xl shadow-lg text-base">
      <SmoothScroll target="#footer" className="hover:animate-bounce cursor-pointer">About us</SmoothScroll>  
      <SmoothScroll target="#faq" className="hover:animate-bounce cursor-pointer">FAQ</SmoothScroll>      
      <SmoothScroll target="#testimonials" className="hover:animate-bounce cursor-pointer">Testimonials</SmoothScroll>      
    </ul>
    <button className=" font-gtEss px-6 py-2 bg-white/40 border border-neutral-500 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      onClick={() => props.setDialogOpen(true)}
    >
      Try now!
    </button>
  </nav>
}