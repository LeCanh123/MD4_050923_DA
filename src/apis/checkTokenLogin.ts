import axios from 'axios';

export default {
    userchecktoken:(token:any)=> {
        console.log("newUser",token);
        return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userchecktoken`,{token})
          .then(res => {
            console.log(res);
          })
          .catch(error => 
            {
                console.log(error)
            }
            );
      },
    }