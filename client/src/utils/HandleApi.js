import axios from 'axios';

const baseUrl = "http://localhost:5000"

const getAllData = (setData) => {
    axios
    .get(baseUrl + "/stockData")
    .then(({data}) => {
        console.log(data);

        setData(data)
    })
}

export {getAllData};