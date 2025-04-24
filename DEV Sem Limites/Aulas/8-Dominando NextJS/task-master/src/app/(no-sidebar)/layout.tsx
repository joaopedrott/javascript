import { Logo } from "@/components/logo";
import Link from "next/link";

interface NoSideBarLayoutProps {
    children: React.ReactNode;
}

export default function NoSideBarLayout({ children }: NoSideBarLayoutProps) {
    return (
        <main className='bg-neutral-100 min-h-screen'>
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-center items-center">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                </nav>

                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    )
}