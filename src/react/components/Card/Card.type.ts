import type { CardData } from "@api/cards/cards.type"

export type CardProps = Omit<CardData, "id">
