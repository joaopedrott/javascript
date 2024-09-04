import { SkeletonLoader } from "../../../components/SkeletonLoader";

import { ButtonsContainer, Container, ContentContainer, Description, DescriptionContainer, DetailColumn, DetailsContainer, PublisherContainer, TitleContainer } from "./BookDetailLoader.styles";

export function BookDetailLoader () {

    return (
            <Container>
                <ContentContainer>
                    <TitleContainer>
                    <SkeletonLoader width="42rem" height="3rem"/>
                    </TitleContainer>
                

                

                <PublisherContainer>
                    <SkeletonLoader width="12rem" height="2.4rem"/>
                    <SkeletonLoader width="20rem" height="2.4rem"/>
                </PublisherContainer>

                    <DetailsContainer>
                        <DetailColumn>
                            <SkeletonLoader width="5rem" height="2rem"/>
                            <SkeletonLoader width="10rem" height="2rem"/>
                        </DetailColumn>

                        <DetailColumn>
                            <SkeletonLoader width="6rem" height="2rem"/>
                            <SkeletonLoader width="6rem" height="2rem"/>
                        </DetailColumn>
                    </DetailsContainer>

                    <ButtonsContainer>
                        <SkeletonLoader width="20rem" height="4.6rem"/>
                        <SkeletonLoader width="16rem" height="4.6rem"/>
                        <SkeletonLoader width="12rem" height="4.6rem"/>
                    </ButtonsContainer>

                    <DescriptionContainer>
                        <SkeletonLoader width="20rem" height="2.4rem"/>

                        <Description>
                            <SkeletonLoader width="100%" height="1.6rem"/>
                            <SkeletonLoader width="78%" height="1.6rem"/>
                            <SkeletonLoader width="80%" height="1.6rem"/>
                            <SkeletonLoader width="85%" height="1.6rem"/>
                            <SkeletonLoader width="75%" height="1.6rem"/>
                            <SkeletonLoader width="85%" height="1.6rem"/>
                            <SkeletonLoader width="80%" height="1.6rem"/>
                        </Description>
                    </DescriptionContainer>
                </ContentContainer>



                <div>
                    <SkeletonLoader width="30rem" height="43rem"/>
                </div>
            </Container>
    )
}