import axios from 'axios';

export default {
    addToCart:async (token:any,id:number)=> {

        return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userproduct/addtocart/`,{token,id})
          .then(res => {
            console.log(res);
            // return res
            return {data:res.data?.data,
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

      },
    getCart:async (token:any)=> {
      console.log("vào get cart");
      

        return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userproduct/getcart/`,{token})
          .then(res => {
            console.log(res);
            // return res
            return {data:res.data?.data,
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

      },
      
    }