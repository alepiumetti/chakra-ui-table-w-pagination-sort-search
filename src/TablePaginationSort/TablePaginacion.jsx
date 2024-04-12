import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { faker } from "@faker-js/faker";
import { sortData } from "../components/SortData";
import PaginationTable from "../components/PaginationTable";

const createFakeDataToTable = () => {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    _id: faker.datatype.uuid(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
};

const TablePaginacion = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortDirection, setSortDirection] = useState("");
  const [sortField, setSortField] = useState("");

  const createData = () => {
    let datos = [];

    for (let index = 0; index < 56; index++) {
      datos.push(createFakeDataToTable());
    }

    setData(datos);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    createData();
  }, []);

  useEffect(() => {}, [sortField, sortDirection]);

  return (
    <TableContainer>
      <Table variant="striped" size="sm">
        <Thead>
          <Tr>
            <Th>
              <span
                className="sortable"
                onClick={() => {
                  const { sortedData, direction } = sortData("firstName", data);
                  setSortField("firstName");
                  setSortDirection(direction);
                  setData(sortedData);
                }}
              >
                FirstName{" "}
                {sortField === "firstName" ? (
                  sortDirection === "asc" ? (
                    <ArrowUpIcon />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {sortField === "firstName" ? (
                  sortDirection === "des" ? (
                    <ArrowDownIcon />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </span>
            </Th>
            <Th>
              <span
                className="sortable"
                onClick={() => {
                  const { sortedData, direction } = sortData("lastName", data);
                  setSortField("lastName");
                  setSortDirection(direction);
                  setData(sortedData);
                }}
              >
                LastName{" "}
                {sortField === "lastName" ? (
                  sortDirection === "asc" ? (
                    <ArrowUpIcon />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {sortField === "lastName" ? (
                  sortDirection === "des" ? (
                    <ArrowDownIcon />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </span>
            </Th>
            <Th>
              <span
                className="sortable"
                onClick={() => {
                  const { sortedData, direction } = sortData("sex", data);
                  setSortField("sex");
                  setSortDirection(direction);
                  setData(sortedData);
                }}
              >
                Sex{" "}
                {sortField === "sex" ? (
                  sortDirection === "asc" ? (
                    <ArrowUpIcon />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {sortField === "sex" ? (
                  sortDirection === "des" ? (
                    <ArrowDownIcon />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </span>
            </Th>
            <Th>Suscription</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td textAlign={"center"} colSpan={9}>
                Cargando datos
              </Td>
            </Tr>
          ) : data.length < 1 || !data ? (
            <Tr>
              <Td textAlign={"center"} colSpan={9}>
                No hay datos para mostrar
              </Td>
            </Tr>
          ) : (
            data
              .map((item) => {
                return (
                  <Tr key={item._id}>
                    <Td>{item.firstName}</Td>
                    <Td>{item.lastName}</Td>
                    <Td>{item.sex}</Td>
                    <Td>{item.subscriptionTier}</Td>
                    <Td>{item.email}</Td>
                  </Tr>
                );
              })
              .slice(pageSize * pageIndex, pageSize * (pageIndex + 1))
          )}
        </Tbody>
      </Table>
      <PaginationTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        totalItemsCount={data.length}
        pageSizeOptions={[10, 25, 50]}
      />
    </TableContainer>
  );
};

export default TablePaginacion;
