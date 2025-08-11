import './PriceComponents.css'
import './BillComponent.css'

function SummaryGenerator({ price, bill }) {
    return (
        <div>
            <div className="bill-container">
                <h2 className="bill-heading">Detailed Bill</h2>
                {Object.entries(bill).map(([product, qtyPriceMap]) => (
                    <div className="bill-item" key={product}>
                        <div className="bill-product">{product.toLocaleUpperCase()}</div>
                        <ul className="bill-list">
                            {Object.entries(qtyPriceMap).map(([qty, pricetotal]) => (
                                <li className="bill-list-item" key={qty}>
                                    Qty: {qty} | Unit Price : {Math.floor(pricetotal / qty)} Rs | Price: {Math.floor(pricetotal)} Rs
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <h3>This is a preliminary bill. Final charges will include taxes and provider adjustments.</h3>
            </div>
            <div className="price-container">
                <h2 className="price-heading">Estimated Price:</h2>
                <p className="price-value">
                    {price !== null ? `${Math.floor(price)} Rs` : 'Waiting For Bill'}
                </p>

            </div>



        </div>
    )
}

export default SummaryGenerator;