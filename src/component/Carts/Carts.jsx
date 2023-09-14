import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({ carts ,totalCreditHour, remaining}) => {
    return (
        <div className="mt-10">
            <div  >
                <h3 className="text-2xl font-bold text-[#2F80ED] pb-2 border-b-2 border-gray-300">Credit Hour Remaining : {remaining} hr</h3>
                <div className="border-b-2 border-gray-300">
                    <h3 className="text-2xl py-4 font-bold ">Course Name</h3>
                {
                    carts.map((cart, idx) => <Cart key={idx} cart={cart} idx={idx} ></Cart>)
                }
                </div>
                <h5 className="text-xl font-semibold py-4 border-b-2 border-gray-300">Total Credit Hour :{totalCreditHour} </h5>
            </div>
        </div>
    );
};
Carts.propTypes={
    carts: PropTypes.array.isRequired,
    totalCreditHour:PropTypes.number.isRequired
}
export default Carts;