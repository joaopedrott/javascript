import { Container } from "./Avatar.styles";

export interface AvatarProps {
    size?: number
}

export function Avatar ({ size = 40 }: AvatarProps) {

    return (
        <Container size={size}>
            <span>JP</span>
        </Container>
    )
}