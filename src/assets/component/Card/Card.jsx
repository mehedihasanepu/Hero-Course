import { FiDollarSign, FiBookOpen } from 'react-icons/fi';

const Card = ({ card }) => {
    const { id, cover, title, details, price, credit } = card;
    return (
        <div >
            <div className="mt-10">
                <div className="card bg-base-100 shadow-xl ">
                    <figure><img className=" w-full px-4" src={cover} alt="course image" /></figure>
                    <div className="card-body space-y-2 px-4">
                        <h2 className="card-title text-xl">{title}</h2>
                        <p>{details}</p>
                        <div className='flex space-x-2 text-lg items-center'>
                            <FiDollarSign />
                            <p>Price: {price}</p>
                            <FiBookOpen />
                            <p>Credit: {credit}hr</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary w-full">Buy Now  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;