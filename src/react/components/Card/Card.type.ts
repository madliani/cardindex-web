import type { CardData } from "@api/types/Card"

export type CardProps = Omit<CardData, "id">
