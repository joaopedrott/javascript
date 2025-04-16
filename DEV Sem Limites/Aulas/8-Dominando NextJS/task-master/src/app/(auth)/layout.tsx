import { Logo } from "@/components/logo";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='bg-neutral-100 min-h-screen'>
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-center items-center">
                    <Logo />
                </nav>

                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    )
}