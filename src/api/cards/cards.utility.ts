import type { Card, CardFromServer } from "@api/cards/cards.type"

import axios, { AxiosError } from "axios"

const isValidCard = (card: unknown) => {
    const isObject = typeof card === "object"

    if (isObject) {
        const cardObject = card as object
        const hasDesc = Object.hasOwn(cardObject, "desc")
        const hasId = Object.hasOwn(cardObject, "id")
        const hasTitle = Object.hasOwn(cardObject, "title")

        return hasDesc && hasId && hasTitle
    }

    return false
}

const isValidCards = (cards: unknown) => {
    const isCardList = typeof cards === "object"

    if (isCardList) {
        const cardList = cards as unknown[]

        return cardList.every(card => isValidCard(card))
    }

    return false
}

const mapCards = (cardsFromServer: CardFromServer[]): Card[] =>
    cardsFromServer.map(cardFromServer => ({
        desc: cardFromServer.desc,
        id: cardFromServer.id,
        title: cardFromServer.title
    }))

const fetchCards = async (): Promise<Card[] | undefined> => {
    const URL = "http://localhost:5000"

    try {
        const { data } = await axios.get(`${URL}/cards`)
        const cards = data["cards"]

        if (isValidCards(cards)) {
            return mapCards(cards)
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            const axiosError = error as AxiosError

            console.error(axiosError.message)

            return
        }

        console.error(error)
    }

    return undefined
}

export { fetchCards }
