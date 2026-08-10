import type { CardData } from "@api/cards/card.type"

export type CardProps = Omit<CardData, "id">
