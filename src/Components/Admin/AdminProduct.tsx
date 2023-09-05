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
import apis from "../../apis";



function AdminProduct() {
  const [men, setMen] = useState([]);
  
  const [category, setCatergory] = useState("admingetmen");
  console.log(category);
  const toast = useToast();

  const getData = async (value) => {
    let getproduct= await apis.admingetmen(`${value}`)
    console.log(getproduct.data);
    setMen(getproduct.data)
  };

  useEffect(async() => {
let getproduct= await apis.admingetmen(`${category}`)
console.log(getproduct.data);
setMen(getproduct.data)


  }, []);

  const handleDelete = async(admintoken,id) => {
let admindeleteproduct= await apis.admindeleteproduct(
  admintoken,id
)
if(admindeleteproduct.status==200){
  let result=men.filter((el)=>el.id!=id)
  setMen(result)
          toast({
          title: "Product remove successfully.",
          description: "",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
}else{
          toast({
          title: "Lỗi hệ thống",
          description: "err",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
}

  };

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <Select
        onChange={(e) => {
          getData(e.target.value)
          setCatergory(e.target.value);
         

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
        <option value="admingetmen">Men</option>
        <option value="admingetwomen">Women</option>
    
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
          men.map((el) => {
            return (
              <Card maxW="sm" key={el.id}>
                <CardBody>
                  <Image
                    src={el.image}
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
                    <a href={`/editProduct/${el.id}`}>
                      <Button colorScheme="blue">Edit Product</Button>
                    </a>

                    <Button
                      onClick={() => handleDelete(localStorage.getItem("loginToken1"),el.id)}
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

export default AdminProduct;
