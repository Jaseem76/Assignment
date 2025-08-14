import './DynamicResourceRenderer.css';

function ResourceInputBlock({ res, index, mainTypes, onTypeChange, handleMainChange, onProductChange, onQuantityChange, onRegionChange, onDelete, selectedMain, subTypes }) {
  return (
    <div className="resource-block">
      <select

        onChange={(e) => {

          const id = e.target.value;
          const name = e.target.options[e.target.selectedIndex].dataset.name;
          console.log("ID:", id, "Name:", name);
          onTypeChange(index, name)
          handleMainChange(id)
        }
        }>
        <option value="">Select Type</option>
        {mainTypes.map(main => (
          <option key={main.id} value={main.id} data-name={main.name}>
            {main.name}
          </option>

        ))}
       
      </select>

      { selectedMain && (
        <select onChange={(e) => {
          onProductChange(index, e.target.value)

        }}>
          <option value="">Select Product</option>
          {subTypes && Array.isArray(subTypes) && subTypes.map(sub => (
            <option key={sub.id} value={sub.name}>{sub.name}</option>
          ))}
         
        </select>
      )}

      {subTypes && (
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
