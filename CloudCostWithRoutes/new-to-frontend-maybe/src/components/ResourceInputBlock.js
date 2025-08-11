import './DynamicResourceRenderer.css';

function ResourceInputBlock({ res, index, resourceOptions, onTypeChange, onProductChange, onQuantityChange, onRegionChange, onDelete }) {
  return (
    <div className="resource-block">
      <select value={res.type} onChange={(e) => onTypeChange(index, e.target.value)}>
        <option value="">Select Type</option>
        <option value="compute">Compute</option>
        <option value="database">Database</option>
        <option value="storage">Storage</option>
      </select>

      {res.type && (
        <select value={res.product} onChange={(e) => onProductChange(index, e.target.value)}>
          <option value="">Select Product</option>
          {resourceOptions[res.type].map((prod) => (
            <option key={prod} value={prod}>{prod}</option>
          ))}
        </select>
      )}

      {res.product && (
        <>
          <input
            type="number"
            placeholder="Choose Quantity"
            className="qunatity-input"
            onChange={(e) => onQuantityChange(index, e.target.value)}
          />
          <select onChange={(e) => onRegionChange(index, e.target.value)}>
            <option value="">Select A Region</option>
            <option value="usa">US-East</option>
            <option value="asia">Asia-Pacific</option>
            <option value="aus">Australia</option>
          </select>
        </>
      )}

      <button type="button" className="delete-btn" onClick={() => onDelete(res.id)}>X</button>
    </div>
  );
}

export default ResourceInputBlock;
