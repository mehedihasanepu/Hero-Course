import PropTypes from 'prop-types';

const Cart = ({cart,idx}) => {
    const {title}=cart
    console.log(idx);
    return (
        <div>
            <h3 className='text-lg py-1'> {idx+1 }. {title}</h3>
        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.object.isRequired,
    idx:PropTypes.number.isRequired
}
export default Cart;