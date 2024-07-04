import { default as NoThumbnailIcon } from '../../icons/photo.svg?react'

import { Container } from "./Thumbnail.styles" 

interface ThumbnailProps {
    thumbnail?: string
    title: string
    size?: 'small' | 'large'
    bgColor: string
}
//antes era (props : ThumbnailProps). Mudou por causa da desestruturação
export function Thumbnail ({
    bgColor, 
    thumbnail, 
    title, 
    size= 'small'
}: ThumbnailProps) {
    return(
        <Container bgColor={bgColor} size={size}>
            {thumbnail ? (
                    <img src={thumbnail} alt={title}/>
                ) : (
                    <NoThumbnailIcon/>
                )}
        </Container>
    )
}