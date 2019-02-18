import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
          "Client-ID 754882a6752880f09fee2690032e35d74af6fd71cd7b1810d4dc718bea0072ab"
      }
});