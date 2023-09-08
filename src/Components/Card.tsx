import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./Card.css";
import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { handleAddToCart,addToCart,addToCart1} from "../redux/cartReducer/reducer";
import userCart from "@/apis/userCart";
import { getcart } from "../redux/cartReducer/reducer";

// const Card = ({ actualPrice, type, id, image, price, title, discount }) => {
  const Card = (props:any) => {
    console.log("id",props);
    
//   localStorage.setItem("checkId","false")


//   let { isAuth, afterLoginUser } = useSelector((state) => state.AuthReducer);
//   const {cartItems}=useSelector((state) => state.cartReducer);
//   console.log("cartItems",cartItems);
//   const toast = useToast();
//   let el ={id:afterLoginUser.email,product:[{
//     actualPrice,
//     type,
//     image,
//     price,
//     title,
//     discount,
//     quantity: 1,
//   }]} 
// const [checkIdCartItem,setCheckIdCartItem]=useState("false")




//   ;
//   const dispatch = useDispatch();

//   useEffect(async()=>{
//     let usercart=await apis.getcart(localStorage.getItem("loginToken1"))
//     console.log("usercart",usercart);
//     if(usercart.data?.data?.length!=0){
//       dispatch(getcart(usercart.data?.data));
//     }
//   },[])



  



  const handleAddToCart= async(id:any) => {
    
        let addToCartResult =await userCart.addToCart(localStorage.getItem("loginToken1"),id)
        console.log("add1",addToCartResult);




  //reload lại giỏ hàng





    // if(add1.status){
    //   dispatch(getcart(localStorage.getItem("loginToken1")))
    //   //lấy giỏ hàng
    // let usercart=await apis.getcart(localStorage.getItem("loginToken1"))
    // console.log("usercart",usercart.data.data);
    // if(usercart.data.data.length!=0){
    //   dispatch(getcart(usercart.data.data));
    // }
    //   //
    //       toast({
    //               title: "Success",
    //               description: "Thêm vào giỏ hàng thành công",
    //               status: "success",
    //               duration: 2000,
    //               isClosable: true,
    //               position: "top",
    //             });
    //       }else{
    //         toast({
    //           title: "Error",
    //           description: "Thêm vào giỏ hàng thất bại",
    //           status: "error",
    //           duration: 2000,
    //           isClosable: true,
    //           position: "top",
    //         });
    //       }
  }




  return (
    <Box
      className="product-card"
      // borderRadius={"20px"}
      width={"100%"}
      textAlign="left"
      height={"450px"}
    >
      <a href={`/${"type"}/${props.data.id}`} >
        <Image borderRadius={"20px"} style={{height:"300px",width:"200px",margin:"15px"}}  src={props.data?.productimage[0]?.image}></Image>
        <Flex gap={"5px"} textAlign={"center"}>
          <Heading paddingTop={"8px"} size="md">
            ${props.data.price}
          </Heading>
          <Text as="del" fontSize={"13px"} paddingTop={"10px"}>
          ${props.data.actualprice}
          </Text>
        </Flex>
        <Text paddingTop={"3px"} fontSize={"14px"}>
          {props.data.title}{" "}
        </Text>
      </a>
      <Button className="add-to-cart-btn" onClick={()=>handleAddToCart(props.data.id)}>
        Add To Cart
      </Button>
    </Box>
  );
};

export default Card;
