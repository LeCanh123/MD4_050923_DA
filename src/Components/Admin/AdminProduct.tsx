import React, { useEffect, useState } from "react";
import "./Admin.css";
import {
  Card,
  CardBody,
  useToast,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Grid,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import adminProduct from "@/apis/adminProduct";



function AdminProduct1() {
  const [men, setMen] = useState([]);
  const toast = useToast();

  
async function getData(e:any){
  let getMenProductResult=await adminProduct.getProduct(localStorage.getItem("loginToken1"),{type:e})
  console.log("getMenProductResult1",getMenProductResult);
}


  useEffect(() => {
    async function getMenProduct(){
      let getMenProductResult= await adminProduct.getProduct(localStorage.getItem("loginToken1"),{type:"men"})
      console.log("getMenProductResult",getMenProductResult);
      if(getMenProductResult.data?.status){
        toast({
          title: "Success",
          description: getMenProductResult.data.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setMen(getMenProductResult.data.data)
      }else{
        toast({
          title: "Err",
          description: getMenProductResult.data.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    }
    getMenProduct()


  }, []);

//   const handleDelete = async(admintoken:any,id:any) => {
// let admindeleteproduct:any= await apis.admindeleteproduct(
//   admintoken,id
// )
// if(admindeleteproduct.status==200){
//   let result=men.filter((el:any)=>el.id!=id)
//   setMen(result)
//           toast({
//           title: "Product remove successfully.",
//           description: "",
//           status: "success",
//           duration: 2000,
//           isClosable: true,
//           position: "top",
//         });
// }else{
//           toast({
//           title: "Lỗi hệ thống",
//           description: "err",
//           status: "error",
//           duration: 2000,
//           isClosable: true,
//           position: "top",
//         });
// }

//   };

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <Select
        onChange={(e) => {
          getData(e.target.value)
          // setCatergory(e.target.value);
         

        }}
        width="20%"
        h={"auto"}
        m="auto"
        border={"1px solid gainsboro"}
        mt={"20px"}
        mb={"20px"}
        ml={"300px"}
        gap={"20px"}
        bg={"#f7f8f7"}
      >
        <option value="men">Men</option>
        <option value="women">Women</option>
    
      </Select>

      <Grid
        width="70%"
        h={"auto"}
        m="auto"
        border={"1px solid gainsboro"}
        mt={"20px"}
        mb={"20px"}
        ml={"300px"}
        gap={"20px"}
        bg={"#f7f8f7"}
        gridTemplateColumns={"repeat(3,1fr)"}
      >
        {men.length > 0 &&
          men.map((el:any) => {
            return (
              <Card maxW="sm" key={el.id}>
                <CardBody>
                  <Image
                    src={el.productimage[0]?.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.title}</Heading>

                    <Text color="blue.600" fontSize="2xl">
                    $ {el.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link to={`/editProduct/${el.id}`}>
                      <Button colorScheme="blue">Edit Product</Button>
                    </Link>

                    <Button
                      // onClick={() => handleDelete(localStorage.getItem("loginToken1"),el.id)}
                      colorScheme="blue"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
      </Grid>
    </>
  );
}

export default AdminProduct1;
