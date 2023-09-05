import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import apis from "../../apis";

function ManageUsers() {
  const [userData, setUserData] = useState([]);

  const getData = async() => {
    let getproduct= await apis.admingetuser("canh")
    console.log(getproduct.data);
    setUserData(getproduct.data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <Grid width="70%" h={"auto"} ml="20px" m={"auto"}>
        <TableContainer width="90%" h={"auto"} ml="150px" mb="20px">
          <Table variant="simple">
            <Thead bg="#285e61">
              <Tr>
                <Th color={"white"}>S.No</Th>
                <Th color={"white"}>User Name</Th>
                <Th color={"white"}>User email</Th>
                <Th color={"white"}>User password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData.length > 0 &&
                userData.map((el, i) => {
                  return (
                    <Tr key={el.id}>
                      <Td>{i + 1}</Td>
                      <Td>
                        {el.firstName} {el.lastName}
                      </Td>
                      <Td>{el.email}</Td>
                      <Td>{el.password}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default ManageUsers;
