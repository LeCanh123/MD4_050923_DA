import axios from 'axios';

export default {

  getlistUser:(token:any)=> {
    console.log("newUser",token);
    return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/adminuser/getlistuser`,{token})
      .then(res => {
        return res
      })
      .catch(error => 
        {
          return {
            data:{data:[]}
          }
      }
        );
  },
    }