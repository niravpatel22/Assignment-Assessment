import { useEffect, useState } from "react";
import { GetAPiDetails, PostAPIDetails, DeleteAPiDetails, EditAPiDetails, UpdateAPiDetails } from "../CRUD/AxiosAPI";

export const GetAPIAction = () => {
    return function (dispatch) {// as like action.type==> passing this function for action
        return GetAPiDetails().then((res) => {
            // console.log(res, 'from action --> index');
            dispatch({
                type: 'GET_DETAILS',
                payload: res.data
            })
        })
    }
}

// why dispatch

export const PostAPIAction = (data) => {

    return function (dispatch) {

        // as like action.type==> passing this function for action

        return PostAPIDetails(data).then((res) => {
            // console.log(res);
            dispatch({
                type: 'POST_DETAILS',
                payload: '' //we will get data so payload is empty
            })
        })
    }
}

//for delete same as  GetAPIAction 

export const DeleteAPIAction = (id) => {
    return function (dispatch) {// as like action.type==> passing this function for action
        return DeleteAPiDetails(id).then((res) => {
            console.log("Delete data Response", res);
            dispatch({
                type: 'DELETE_DETAILS',
                payload: true,
            })
        })
    }
}

export default (props) => {
    const [detailsById, setDetailsById] = useState({})
    const GetDetailsId = (requestId) => {
        console.log("EDIT DATA from action", requestId);
        return EditAPiDetails(requestId).then((res) => {
            console.log(res.id);
            setDetailsById(res);
        })
    }
    useEffect(() => {
        GetDetailsId(props)
    }, [])
    return [detailsById]
}

//delete data

export const UpdateAPIAction = (request, id) => {

    return function (dispatch) {

       dispatch({
        type : 'UPDATE_DETAILS',
        payload : false,
       })

        return UpdateAPiDetails(request,id).then((res) => {
            console.log('update data',res);
            dispatch({
                type: 'UPDATE_DETAILS',
                payload: true //after getting data will update it
            })
        })
    }
}


