import { SkeletonLoader } from "../../components/SkeletonLoader";
import { Container, TextContainer } from "./SearchLoader.styles";

export function SearchLoader () {
    return(    
        <>
        {Array.from({ length: 3}, (_, i)=> i + 1).map((skeleton) => (
                <Container key={skeleton}>
                    <SkeletonLoader width="6rem" height="8rem"/>
            
                    <TextContainer>
                        <SkeletonLoader width={skeleton % 2===0 ? "12rem" : "22rem"} height="2.4rem"/>
                        <SkeletonLoader width="8rem" height="1.6rem"/>
                    </TextContainer>
            </Container>
        ))}

        </>
    )
}