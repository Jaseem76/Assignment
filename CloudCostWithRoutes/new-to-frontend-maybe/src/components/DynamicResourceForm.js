import { useEffect, useState } from 'react';
import './DynamicResourceRenderer.css';
import ResourceInputBlock from './ResourceInputBlock';

function DynamicResourceForm({ onSubmit }) {

    const [resources, setResources] = useState([]);
    const [mainTypes, setMainTypes] = useState([]);
    const [subTypes, setSubTypes] = useState([]);
    const [selectedMain , setSelectedMain] = useState("");


//     useEffect(() => {
//     console.log("Current resources:", resources);
// }, [resources]);


    useEffect(() => {
    fetch("http://localhost:8080/categories")
        .then(res => res.json()) 
        .then(data => setMainTypes(data))
        .catch(err => console.error("Error fetching main categories:", err));
}, []);

const handleMainChange = (id) => {
    setSelectedMain(id);
    
    console.log(`selected main : ${selectedMain}`);
    fetch(`http://localhost:8080/categories/${id}/subcategories`)
    .then(res => res.json())
    .then(data => setSubTypes(data))
    .catch(err => console.error("Error fetching subcategories:", err));
    
    
};

    const handleAddResource = () => {
        const newResource = { id: Date.now(), type: '', product: '', quantity: 0, region: '' };
        setResources([...resources, newResource]);
    };

    const handleTypeChange = (index, type) => {
        const newResources = [...resources];
        newResources[index].type = type;
        newResources[index].product = '';
        setResources(newResources);
    };

    const handleProductChange = (index, product) => {
        const newResources = [...resources];
        newResources[index].product = product;
        setResources(newResources);
    };

    const handleQuantityChange = (index, quantity) => {
        const newResources = [...resources];
        newResources[index].quantity = parseInt(quantity, 10);
        setResources(newResources);
    };

    const handleRegionChange = (index, region) => {
        const newResources = [...resources];
        newResources[index].region = region;
        setResources(newResources);
    };

    const handleDelete = (id) => {
        const updated = resources.filter((res) => res.id !== id);
        setResources(updated);
    };

    const sendResourcesToBackend = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/resources/calculate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(resources),
            });

            if (!response.ok) throw new Error("Failed to send resources");

            const result = await response.json();
            if (onSubmit) onSubmit();
            console.log("Server response:", result);
        } catch (error) {
            console.error("Error sending resources:", error);
        }
    };

    return (
        <div className="container">
            <button className="addButton" onClick={handleAddResource}>Add Resource</button>
            <form>
                {resources.map((res, index) => (
                    <ResourceInputBlock
                        key={res.id}
                        res={res}
                        index={index}
                        mainTypes={mainTypes}
                        onTypeChange={handleTypeChange}
                        handleMainChange={handleMainChange}
                        onProductChange={handleProductChange}
                        onQuantityChange={handleQuantityChange}
                        onRegionChange={handleRegionChange}
                        onDelete={handleDelete}
                        selectedMain={selectedMain}
                        subTypes={subTypes}
                    />
                ))}
            </form>

            <br />
            <div>
                {resources.length > 0 &&
                    resources.every(r => r.type && r.product && r.quantity && r.region) && (
                        <button className="submit-button" onClick={sendResourcesToBackend}>Submit Resources</button>
                    )}
            </div>
        </div>
    );
}

export default DynamicResourceForm;
