import NavLink from "./nav-link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";

const header = () => {
    const isLoggedIn = false;

    return (
        <nav className="container flex items-center justify-between py-4 lg:px-8 mx-auto">
            <div className="flex">
                <NavLink href="/" className="flex items-center gap-1 shrink-0">
                    <FileText className="h-6 w-6 lg:w-7 lg:h-7" />
                    <span className="lg:text-lg  text-gray-900 font-extrabold">
                        {" "}
                        Sommaire{" "}
                    </span>
                </NavLink>
            </div>

            <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
                <NavLink href="/#pricing">Pricing</NavLink>
                {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
            </div>

            <div className="flex lg:justify-end ">
                {isLoggedIn ? (
                    <div className="flex gap-2 items-center">
                        <NavLink href="/upload">Upload a PDF</NavLink>
                        <div>Pro</div>
                        <Button>User</Button>
                    </div>
                ) : (
                    <NavLink href="/sign-in">Sign In</NavLink>
                )}
            </div>
        </nav>
    );
};

export default header;
