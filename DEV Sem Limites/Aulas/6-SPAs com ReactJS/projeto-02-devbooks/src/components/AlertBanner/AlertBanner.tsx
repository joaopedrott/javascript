import { Container } from './AlertBanner.styles'

import { default as ExclamarionCircleIcon } from '../../icons/exclamation-circle.svg?react'
import { default as ExclamarionTrianguleIcon} from '../../icons/exclamation-triangle.svg?react'
import { default as CheckCircleIcon } from '../../icons/check-circle.svg?react'

export type AlertBannerVariants = 'success' | 'error' | 'warning'

interface AlertBannerProps {
 variant? : AlertBannerVariants
 message: string
}

const icons = {
    success: CheckCircleIcon,
    error: ExclamarionCircleIcon,
    warning: ExclamarionTrianguleIcon
}

export function AlertBanner ({ 
    variant ="success",
    message 
}: AlertBannerProps) {
    const Icon = icons[variant]

    return (
        <Container variant ={variant}>
            <Icon/>
            {message}
        </Container>
    )
}