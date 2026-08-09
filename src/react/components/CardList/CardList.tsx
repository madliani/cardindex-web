import { Card } from "@react/components/Card/Card"
import type { CardListProps } from "@react/components/CardList/CardList.type"
import "./CardList.style.scss"

const CardList = ({ cardList }: CardListProps) => (
    <section className="card-list">
        {cardList.map(card => (
            <Card title={card.title} desc={card.desc} key={card.id} />
        ))}
    </section>
)

export { CardList }
