import { Container } from "./SkeletonLoader.styles";

interface SkeletonLoaderProps {
    width: string
    height: string
}

export function SkeletonLoader ({width, height}:SkeletonLoaderProps) {

    return (
        <Container width={width} height={height}/>

        
    )
}