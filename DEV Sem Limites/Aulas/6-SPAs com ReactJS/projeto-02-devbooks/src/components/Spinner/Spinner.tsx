import { Container } from "./Spinner.styles";

export interface SpinnerProps {
    size?: number
}

export function Spinner ( { size = 24}: SpinnerProps) {


    return (
        <Container size={size}/>
    )
}