import axios from 'axios'


export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'b8fd2f3f6dmsh6eaf4fe25fbc579p1b71cajsn86ca29f1b77a'
//   }

export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
             'x-rapidapi-host': 'bayut.p.rapidapi.com',
             'x-rapidapi-key': 'b8fd2f3f6dmsh6eaf4fe25fbc579p1b71cajsn86ca29f1b77a'
           }
    })

    return data
}