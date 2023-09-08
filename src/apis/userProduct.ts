import axios from 'axios';

export default {
    getMenproduct:async (data:any)=> {
        return axios.get(import.meta.env.VITE_SERVER_HOST+`apis/v1/userproduct/getmenproduct/`)
          .then(res => {
            console.log(res);
            // return res
            return {data:res.data.data,
            total:1
                  }
          })
          .catch(error => 
            
            {

                console.log(error)

                return {data:[{id:1}],
                total:4
                        }
            }
            );
        // return {data:[{id:1},{id:2},{id:3},{id:4}],
        //         total:1
        //         }
      },

      
    }