import { Card, Spinner } from "@heroui/react"
import "@react/components/LoadingCard/LoadingCard.style.scss"

const LoadingCard = () => (
    <Card>
        <Card.Header className="loading-card__header">
            <Spinner size="xl" />
        </Card.Header>
    </Card>
)

export { LoadingCard }
