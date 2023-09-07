import axios from 'axios';

export default {
    getMenproduct:(token:any)=> {
        console.log("getMenproduct");
        
        // console.log("newUser",token);
        // return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userchecktoken`,{token})
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(error => 
        //     {
        //         console.log(error)
        //     }
        //     );
        return {data:[{id:1},{id:2},{id:3},{id:4}],
                total:1
    
    }
      },
    }