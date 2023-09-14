import { FiDollarSign, FiBookOpen } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Card = ({ card, handleAddToCarts}) => {
    const { cover, title, details, price, credit } = card;
    return (
        <div >
            <div className="mt-10">
                <div className="card bg-base-100 shadow-xl h-[450px] ">
                    <figure><img className=" w-full px-4" src={cover} alt="course image" /></figure>
                    <div className="card-body space-y-2 px-4">
                        <h2 className="card-title text-xl font-bold">{title}</h2>
                        <p>{details}</p>
                        <div className='flex space-x-2 text-lg items-center'>
                            <FiDollarSign />
                            <p>Price: {price}</p>
                            <FiBookOpen />
                            <p>Credit: {credit}hr</p>
                        </div>
                        <div className="card-actions">
                            <button className="py-2 rounded-lg font-semibold text-white hover:bg-[#5059ff] bg-[#2F80ED] w-full" onClick={() => handleAddToCarts(card)}>Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToCarts:PropTypes.func.isRequired
}
export default Card;
