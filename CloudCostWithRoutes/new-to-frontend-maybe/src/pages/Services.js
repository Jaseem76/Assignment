import './Service.css';
import DynamicResourceForm from '../components/DynamicResourceForm';
import fetchingSummaryFromServer from '../services/FetchingSummary';
import SummaryGenerator from '../components/Summary';
import { useState } from 'react';

function Services() {
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [estimatedBill, setEstimatedBill] = useState({});
  const [billDisplay , setBillDisplay] = useState(false);

  const refreshSummary = () => {
    fetchingSummaryFromServer.getEstimatedSummary()
      .then(response => {
        setEstimatedPrice(response.data.estimatedPrice);
        setEstimatedBill(response.data.detailedBill);
        setBillDisplay(true);

      })
      .catch(error => {
        console.log("Error fetching summary : ", error);
      });
  };

  return (
    <div className="services-page">
      <label>Check Cloud Cost</label>
      
      <div className="services-section">
        <DynamicResourceForm onSubmit={refreshSummary} />
      </div>

      <div className="services-section" style={{ marginTop: "2rem" }}>
        {billDisplay && (<SummaryGenerator price={estimatedPrice} bill={estimatedBill} />)}
      </div>
    </div>
  );
}

export default Services;
