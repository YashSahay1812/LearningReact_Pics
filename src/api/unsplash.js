import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1absaLgm0YZorA-RmMlIedgjCXu70QO9wzyL7OqSTOU'
    }
});