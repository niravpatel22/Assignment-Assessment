import axios from "axios";

export async function AxiosRequest(url, method, headers, parms) {
    return parms ? axios({
        url: url,
        method: method,
        headers: headers,
        data: parms
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {}
    })
}

const GetAPiDetails = () => {

    //get Data
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details', 'GET', headers, {})


}
//postData
const PostAPIDetails = (data) => {


    return axios.post('http://localhost:3000/details', data)
}

//DelteData

const DeleteAPiDetails = (id) => { //passing id 

    //get Data
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'DELETE', headers, {})

}

const EditAPiDetails = (id) => { //passing id 

    //get Data
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'GET', headers, {})

}

//update Data

const UpdateAPiDetails = (data, id) => { //passing id 

    //get Data
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'PUT', headers, data)

}

export { GetAPiDetails, PostAPIDetails, DeleteAPiDetails, EditAPiDetails, UpdateAPiDetails };