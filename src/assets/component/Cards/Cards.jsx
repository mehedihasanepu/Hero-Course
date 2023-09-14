import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cardData, setCardData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    return (
        <div className="flex-1 grid grid-cols-1  lg:grid-cols-3 gap-4">
            {
                cardData.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;