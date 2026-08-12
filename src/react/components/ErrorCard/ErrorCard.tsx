import type { ErrorCardProps } from "@react/components/ErrorCard/ErrorCard.type"

import { Card } from "@heroui/react"

const ErrorCard = ({ message }: ErrorCardProps) => (
    <Card>
        <Card.Header>
            <Card.Title>Error</Card.Title>
            <Card.Description>{message}</Card.Description>
        </Card.Header>
    </Card>
)

export { ErrorCard }
