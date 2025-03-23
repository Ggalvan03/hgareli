import HamburgerMenu from "@/app/ui/hamburger-menu";
import NavLinks from "@/app/ui/nav-link";

export default function NavBar(){
    return(
        <div>
            <div className="block md:hidden">
                <HamburgerMenu/>
            </div>

            <div className="flex hidden md:block">
                <NavLinks/>
            </div>
        </div>
    );
}