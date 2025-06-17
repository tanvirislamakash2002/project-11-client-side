import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
// import Swal from 'sweetalert2';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
const useAxiosSecure = () => {
    // const {signOutUser} = useAuth()
    const token = localStorage.getItem('token')

    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    axiosInstance.interceptors.response.use(res=>{
        return res
    }, error=>{
        if(error.status===401||error===403){
            // signOutUser().then(()=>{
            //                     Swal.fire({
            //                         position: "center",
            //                         icon: "success",
            //                         title: `You are logged out because of an error with ${error.status} code`,
            //                         showConfirmButton: false,
            //                         timer: 3500
            //                     });
            // }).catch(error=>{
            //     console.log(error)
            // })
            console.log('logged out')
        }
        return Promise.reject(error)
    })
    return axiosInstance;
};

export default useAxiosSecure;