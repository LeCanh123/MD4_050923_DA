import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
// import { getmens } from "../redux/MenReducer/action";
import { fetchMensData } from "../redux/MenReducer/reducer";


import { Box, Grid, Progress, Spinner, Text } from "@chakra-ui/react";
import Card from "../Components/Card";
import Pagination2 from "../Components/Filter/Pagination2";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import Menfilter from "../Components/Filter/Menfilter";
import { getMenRequestSuccess } from "../redux/MenReducer/reducer";
import apis from "../apis";

export const Women = () => {
  const [isPageRedirected, setPageRedirected] = useState(false);
  let [paginatedProducts,setpaginatedProducts] =useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { men, isLoading, isError, total } = useSelector((store) => {
    return store.MenReducer;
  });
  /////////////////////////////////////////////
  const queryParams = new URLSearchParams(location.search);
  const itemsPerPage = 12;
  const currentPage = parseInt(queryParams.get('page')) || 1;
  const sortbycanh = queryParams.get('order') || "asc";
 
  let getPaginatedProducts = (currentPage1) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
if(currentPage1=="asc"){
  return men.slice(startIndex, endIndex).sort(function(a, b) {
        return a.price - b.price;
      });
}else{
  return men.slice(startIndex, endIndex).sort(function(a, b) {
    return b.price - a.price;
  });
}
    // return men.slice(startIndex, endIndex);
  };
  console.log(getPaginatedProducts(sortbycanh));

  // useEffect(()=>{
  //   console.log(sortbycanh);
  //   setPageRedirected(Date.now())
  //   getPaginatedProducts=getPaginatedProducts("d").sort(function(a, b) {
  //     return a.price - b.price;
  //   });
  // },[sortbycanh])
  
  // useEffect(() => {
  //   if (isPageRedirected) {
  //     window.location.href = `http://localhost:3000/men?page=${currentPage}`;
  //     setPageRedirected(true);
  //   }
  // }, [currentPage]);
  
////////////////////////////////////////////////////////
  let Obj = {
    params: {
      category: searchParams.getAll("category"),
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(async() => {
    let menproduct=await apis.getWomen("S")


    console.log("dddddddd",menproduct);
if(menproduct.status==true){
  dispatch(getMenRequestSuccess({
total:menproduct.data.length,
data:menproduct.data
  }))
}

    // if(menproduct.status){setWomen(menproduct.data);}
    // else{
    //   toast({
    //     title: "Hệ thống bận ,thử lại sau",
    //     description: "Err",
    //     status: "error",
    //     duration: 2000,
    //     isClosable: true,
    //     position: "top",
    //   });
    // }
  }, []);

  return (
    <div>
      <Navbar />
      <Box>
        <Progress
          colorScheme="pink"
          hasStripe
          height="42px"
          value={100}
          isAnimated
        />
        <Text
          color={"white"}
          fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
          position="absolute"
          top={{ base: "117px", sm: "115px", md: "142px", lg: "85px" }}
          left={{ base: "5%", sm: "27%", md: "30%", lg: "40%" }}
        >
          New arrivals in menswear upto 30% off ❤️
        </Text>
      </Box>
      <Menfilter type={"men"} />
      {isLoading ? (
        <Box
          textAlign={"center"}
          width={"100%"}
          height={"400px"}
          paddingTop="150px"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : isError ? (
        "Something went wrong"
      ) : (
        <Grid
          width={"80%"}
          margin={"auto"}
          justifyContent="space-between"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          columnGap="20px"
        >
          {getPaginatedProducts(sortbycanh).length > 0 &&
            getPaginatedProducts(sortbycanh).map((el) => {
              return <Card key={el.id} {...el} id={el.id} type={"men"} />;
            })}
        </Grid>
      )}
      <Pagination2 />
      <Box mt={"30px"}>
        <Footer />
      </Box>
    </div>
  );
};
