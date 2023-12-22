import axios from 'axios';

const useAxios = () => {
   const instance = axios.create({
      baseURL: 
      // 'http://localhost:3000/api/v1',
      "https://task-manage-woad-theta.vercel.app/api/v1"
    });
   return instance
};

export default useAxios;