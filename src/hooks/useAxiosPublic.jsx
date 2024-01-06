import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://foodi-server-fdln.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
