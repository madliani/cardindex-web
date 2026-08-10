import type { CardListProps } from "@react/components/CardList/CardList.type"

import { Card } from "@react/components/Card/Card"

import "./CardList.style.scss"

const CardList = ({ cardList }: CardListProps) => (
    <section className="card-list">
        {cardList.map(card => (
            <Card desc={card.desc} key={card.id} title={card.title} />
        ))}
    </section>
)

export { CardList }
