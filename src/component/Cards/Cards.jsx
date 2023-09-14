import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({handleAddToCarts}) => {
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
                    handleAddToCarts={handleAddToCarts}
                ></Card>)
            }
        </div>
    );
};
Cards.propTypes={
    handleAddToCarts:PropTypes.func.isRequired,
}
export default Cards;