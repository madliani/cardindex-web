import type { Card } from "@api/cards/cards.type"

export type CardProps = Omit<Card, "id">
