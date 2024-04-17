import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo  from "../Logo/Logo";
import clsx from "clsx";
import useNavbar from "./useNavbar";


const NavBar = () => {
    const { menuOpen, toggleMenu } = useNavbar();

  const navLinks = [ 
    {
        label:"inicio",
         href: "#" 
    },
    {
        label:"servicios",
         href: "#" 
    },
    {
        label:"nosotros",
         href: "#" 
    },
    {
        label:"contacto",
         href: "#" 
    },
]
    return (
        <main>
            <nav className=' flex justify-between px-8 items-center py-6'>
                <section className="flex items-start gap-4">
                    <IoMenu onClick={() => toggleMenu(true)} className='text-5xl cursor-pointer' />
                    <a href="../../Pages/Home" className="text-4xl"><Logo/></a>
                    
                </section>
                <div className={clsx(
                    "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-full transition-all",
                    menuOpen && 'translate-x-0'
                )}>
                    <section className="text-black bg-white flex-col 
                    absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                        <IoClose  
                        onClick={() => toggleMenu(false)}
                        className="mt-0 mb-8 text-3xl cursor-pointer"/>
                        {navLinks.map((data, i) => ( 
                            <a key={i} className="font-bold" href={data.href} >
                                {data.label}
                            </a>
                        ))
                        }
                    </section>
                </div>
            </nav>
        </main>
    );
  };
  
  export default NavBar;