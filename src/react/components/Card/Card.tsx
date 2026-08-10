import type { CardProps } from "@react/components/Card/Card.type"

import { Card as HCard } from "@heroui/react"

import "./Card.style.scss"

const Card = ({ desc, title }: CardProps) => (
    <HCard className="card">
        <HCard.Header className="card__header">
            <HCard.Title className="card__title">{title}</HCard.Title>
            {desc && <HCard.Description>{desc}</HCard.Description>}
        </HCard.Header>
    </HCard>
)

export { Card }
