import SideNav from "@/app/ui/dashboard/sidenav";
import { inter } from "@/app/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-row h-screen">
            <SideNav />
            <div className={`${inter.className} antialiased`}>{children}</div>
        </div>
    );
}