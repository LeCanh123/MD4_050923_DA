import axios from 'axios';

export default {
    addToCart:async (token:any,id:number)=> {
        return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userproduct/addtocart/`,{token,id})
          .then(res => {
            console.log(res);
            return res
          })
          .catch(error => {
                return {data: {
                              status:false,
                              message:"Lỗi hệ thống"
                              }}}
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
    deleteProduct:async (token:any,id:any)=> {
        console.log("vào deleteProduct");
          return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userproduct/deleteproduct/`,{token,id})
            .then(res => {
              console.log(res);
              // return res
              return res
            })
            .catch(err => {
              return {
                data:{
                  status:false,
                  message:"Lỗi hệ thống"
                }
              }
            }
   
              
              );
  
      },
    changeQuantity:async (token:any,id:any,type:any)=> {
        console.log("vào deleteProduct");
          return axios.post(import.meta.env.VITE_SERVER_HOST+`apis/v1/userproduct/changequantity/`,{token,id,type})
          .then(res => {
            console.log(res);
            // return res
            return res
          })
          .catch(err => {
            return {
              data:{
                status:false,
                message:"Lỗi hệ thống"
              }
            }
          }
              );
  
      },
      
    }