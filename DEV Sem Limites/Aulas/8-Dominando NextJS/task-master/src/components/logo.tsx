import Image from "next/image";

export function Logo() {
    return (
            <div className="flex items-center gap-2">
                <Image src={'/logo.svg'} alt="Task Master" width={36} height={36} />
                <span className="font-semibold text-2xl">
                TaskMaster
                </span>
            </div>
    )


}