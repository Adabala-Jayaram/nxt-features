import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItems = cartList.length

      let totalCartValue = 0
      cartList.forEach(cartItem => {
        totalCartValue += cartItem.quantity * cartItem.price
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-summary-card">
            <h1 className="total-cart-item-value">
              Order total :
              <span className="total-amount"> RS {totalCartValue}</span>
              /-
            </h1>
            <p className="cart-count">{cartItems} Items in cart</p>
            <div className="check-out-btn-bg">
              <button type="button" className="check-out-btn">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
