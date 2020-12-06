
import axios from 'axios'

export const getData = (url) => {
const data=  axios.get(
    url
  ).then(res=>res.data);
return data
}

export const  putData = (url, object)=>{
  axios.put(url, object)
}

export const postData =(url, data)=>{

axios.post(url, data)

}


