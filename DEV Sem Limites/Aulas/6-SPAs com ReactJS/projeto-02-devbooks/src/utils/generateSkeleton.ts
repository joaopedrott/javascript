export function generateSkeleton (length: number) : number[] {
    return Array.from({ length}, (_,i) => i+1)
}