# Cloud Cost Estimator – Frontend

**Tech Stack:** React.js, JavaScript, HTML, CSS

This frontend is the user interface for the Cloud Cost Estimator application. It allows users to select cloud resources and regions, sends the details to the backend, and displays the calculated costs.

---

## **How It Works**

1. **User Input** – The user selects:

   * Resource Type (e.g., Compute, Storage)
   * Resource Product (e.g., CPU, GPU)
   * Quantity
   * Region

2. **Send Request** – The frontend sends the selected data as JSON to the backend's REST API endpoint.

3. **Receive Calculation** – The backend responds with the calculated cost details.

4. **Display Results** – The UI shows the detailed cost breakdown for the selected resource(s).

---

## **Key Features**

* **Dynamic Forms** – Inputs are based on available resource types and regions.
* **Real-time API Integration** – Communicates with the Spring Boot backend for live cost calculations.
* **Clear Results Display** – Shows resource type requested, quantity, region modified price, and total cost.
* **Responsive Design** – The UI changes according to page expnasion and compression(bootstrap).

---

## **Example Flow**

1. User selects:

   ```
   Type: Compute  
   Product: GPU  
   Quantity: 2  
   Region: USA  
   ```
2. Frontend sends:

   ```json
   {
     "type": "Compute",
     "product": "GPU",
     "quantity": 2,
     "region": "USA"
   }
   ```
3. Backend returns:

   ```json
   {
    "estimatedPrice": 1300,
    "detailedBill": {
    "gpu": {
      "2": 1300
    }
    }
   }

   ```
4. Frontend displays:

   ```
   GPU  
   Quantity: 2 | Unit Price: 650 Rs | Total Price: 1300 Rs
 
   ```

---

## **Folder Structure**

```
src/
 ├── components/    # Reusable UI components (forms, result display, etc.)
 ├── pages/         # Main app pages
 ├── services/      # API call functions
 ├── App.js         # Root component
 └── index.js       # Entry point
```

---

## **How to Run Locally**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cloud-cost-estimator-frontend.git
   cd cloud-cost-estimator-frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   npm install axios
   npm install
   npm install react-router-dom
   ```
3. Start the development server:

   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

