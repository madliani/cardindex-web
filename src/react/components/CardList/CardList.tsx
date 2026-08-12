import type { CardListProps } from "@react/components/CardList/CardList.type"

import { Card as HCard, Typography } from "@heroui/react"
import { Card } from "@react/components/Card/Card"
import "@react/components/CardList/CardList.style.scss"

const CardList = ({ cardList, title }: CardListProps) => (
    <section className="card-list">
        {title && (
            <HCard>
                <HCard.Header>
                    <Typography.Heading level={2}>{title}</Typography.Heading>
                </HCard.Header>
            </HCard>
        )}

        {cardList.map(card => (
            <Card desc={card.desc} key={card.id} title={card.title} />
        ))}
    </section>
)

export { CardList }
