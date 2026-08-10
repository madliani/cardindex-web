import type { CardData } from "@api/types/card"

export type CardProps = Omit<CardData, "id">
