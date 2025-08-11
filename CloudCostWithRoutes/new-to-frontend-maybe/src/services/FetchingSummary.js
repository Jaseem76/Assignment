import axios from 'axios';

const SUMMARY_URL = 'http://localhost:8080/api/resources/price/summary';

class FetchingSummaryFromServer {
    getEstimatedSummary() {
        return axios.get(SUMMARY_URL);
    }
}

const fetchingSummaryFromServer = new FetchingSummaryFromServer();
export default fetchingSummaryFromServer;
