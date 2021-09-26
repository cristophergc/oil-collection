import React from 'react'
import { connect } from 'react-redux'
import { addOrder } from '../api/clients'

function CollectionRequest (props) {
  // const [orderStatus, setOrderStatus] = useState({ activeOrder: false })

  const { id, businessName, addressStreet, addressCity, product } = props.client

  function addNewOrder () {
    addOrder(id)
  }

  return (
    <>
      <div>

        <h2>Your Account:</h2>
        <p>{businessName}</p>

        <h2>Your Address:</h2>
        <p>{addressStreet}</p>
        <p>{addressCity}</p>

        <h2>for {product} collection</h2>
        <button
          onClick={addNewOrder}
          className='button-primary'
        >
          CLICK HERE

        </button>

      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(CollectionRequest)
