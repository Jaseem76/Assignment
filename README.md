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


# Cloud Cost Estimator – Backend

**Tech Stack:** Java, SpringBoot, PSQL

This backend receives the input from frontend and displays the calculated costs.

---

## **How It Works**
1. **The backend can be checked at the [http://localhost:8080](http://localhost:8080)
2. **Receive User Input** – The frontend user input is sent to backend in [http://localhost:8080/api/resources/calculate](http://localhost:8080/api/resources/calculate) 
3. **Display Results** – The details(price/bill) are calculated and result is sent as a json at [http://localhost:8080/api/resources/price/summary](http://localhost:8080/api/resources/price/summary) 

---

## **Key Features**

* **Cost_Estimation table** – The unit price is taken from cost_estimate table using (resource_type,resource_product)
* **Region_Info table** – The region modifier is taken from region_info table by the region input given by user.
* **Normalised and redundancy minimized tables** – This ensures the table entries to be minimal as possible, 9 entries (3 products for each type) in cost_estimation table and 3 entries(3 regions, 3 region modifiers) in   region_info table. This helps to have a base unit price stored in table and then using region modifier to change the unit price accordingly.

  eg : if product : 'cpu', unit price : 500, then if region = usa , then we pick region modifier from region_info table, say 1.3(30% increment from base price). therefore the unit price will become 500X1.3 = 650Rs

  The main logic for total price calculation = unit price*quantity*region modifier - for all the user input
---
