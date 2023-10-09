# chakra-ui-table-w-pagination-sort-search
Pagination tables component for Chakra-UI

![demo-dif](demo-gif.gif)

- [chakra-ui-table-w-pagination-sort-search](#chakra-ui-table-w-pagination-sort-search)
- [Getting started](#getting-started)
  - [Install](#install)
    - [Props](#props)
    - [Import and use](#import-and-use)
  - [Example](#example)
  - [Demo](#demo)


# Getting started

## Install

`npm install table-pagination-chakra-ui`

[npm Module](https://www.npmjs.com/package/table-pagination-chakra-ui)

### Props

`pageSize` : {Number} - Es la cantidad de items que se van a ver por página

`setPageSize`: {Function} - Setter de pageSize

`pageIndex`: {Number} - Es la indice en el cual nos encontramos dentro de la paginación de la tabla

`setPageIndex`: {Function} - Setter de pageIndex

`totalItemsCount`: {Number} - Es el largo del array de datos que se va a mostrar en la tabla

`pageSizeOptions`: {Array.Number} - Son las opciones de cantidades de items que se pueden mostrar por página. - `Default = [10,25,50]`

`colorScheme`: Color de la paginación - `Default = "teal"`

`showOptions`: {Boolean} - Muestra las opciones - `Default = true`

`labelOptions`: {String} - Etiqueta de opciones - `Default = "Items mostrados"`

### Import and use


```javascript
import {PaginationTable} from "table-pagination-chakra-ui"

const your_function = () => {

  return (
    <>    
        
        {/*your code here*/}
        
        <PaginationTable
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          totalItemsCount={data.length}
          pageSizeOptions={[10, 25, 50]}
        />
    </>

  )
}

```



## Example

```javascript
import {PaginationTable} from "table-pagination-chakra-ui"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Table = () => {

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (<TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>
                  FirstName
              <Th>
                  LastName
              </Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {data
                .map((item) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item.firstName}</Td>
                      <Td>{item.lastName}</Td>
                    </Tr>
                  );
                })
                .slice(pageSize * pageIndex, pageSize * (pageIndex + 1))
            }
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
      </TableContainer>)

}
```

## Demo

https://alepiumetti.github.io/chakra-ui-table-w-pagination-sort-search/

  
