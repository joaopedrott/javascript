import { SkeletonLoader } from "../../../components/SkeletonLoader";


import { 
    Container, 
    DetailsContainer, 
    ThumbnailContainer 
} from "./BookLoader.styles";

export function BookLoader () {
    return (
        <>
            {Array.from({ length: 8}, (_,i) => i+1).map(skeleton => 
                <Container key ={skeleton}>
                    <ThumbnailContainer>
                        <SkeletonLoader height="22rem" width="14rem"/>
                    </ThumbnailContainer>

                    <DetailsContainer>
                    <SkeletonLoader height="2rem" width="100%"/>
                    <SkeletonLoader height="2rem" width="65%"/>
                    <SkeletonLoader height="1rem" width="40%"/>
                    <SkeletonLoader height="1rem" width="20%"/>
                    </DetailsContainer>
                </Container>
            )}
        </>
    )
}