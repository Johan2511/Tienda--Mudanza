import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useNavbar from "./useNavbar";
import Logo  from "../Logo/Logo";



const NavBar = () => {
    const { menuOpen, setMenuOpen, navLinks } = useNavbar();
    return (
        <main>
            <nav className=' flex justify-between px-8 items-center py-6'>
                <section className="flex items-start gap-4">
                    <IoMenu className='text-5xl' />
                    <a href="../../Pages/Home" className="text-4xl"><Logo/></a>
                     
                </section>
                <div className="fixed h-full w-screen lg:hidden bg-black/50
                 backdrop-blur-sm top-0 right-0">
                    <section className="text-black bg-white flex-col 
                    absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                        <IoClose  
                        onClick={()=> setMenuOpen(false)}
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