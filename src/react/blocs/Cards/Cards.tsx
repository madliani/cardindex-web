import type { Card } from "@api/cards/cards.type"

import { fetchCards } from "@api/cards/cards.utility"
import { CardList } from "@react/components/CardList/CardList"
import { ErrorCard } from "@react/components/ErrorCard/ErrorCard"
import { LoadingCard } from "@react/components/LoadingCard/LoadingCard"
import { useEffect, useState } from "react"

const Cards = () => {
    const [cards, setCards] = useState<Card[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    )

    useEffect(() => {
        fetchCards()
            .then(cards => {
                if (!cards) {
                    setErrorMessage("Cards didn't load!")

                    return
                }

                setCards(cards)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <LoadingCard />
    }

    if (errorMessage) {
        return <ErrorCard message={errorMessage} />
    }

    return <CardList cardList={cards} />
}

export { Cards }
