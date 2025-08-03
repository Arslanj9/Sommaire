import Link from "next/link";
import { cn } from "@/lib/utils"

const NavLink = ({
    href,
    children,
    className
}: {
    href: string;
    children: React.ReactNode;
    className?: string; 
}) => {
    return (
        <div>
            <Link
                href={{ href }}
                className={cn("transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500", className)}
            >
                {children}
            </Link>
        </div>
    );
};

export default NavLink;
