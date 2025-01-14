# chakra-ui-table-w-pagination-sort-search | English Version
Pagination tables component for Chakra-UI V2 

![demo-gif](demo-gif.gif)

- [chakra-ui-table-w-pagination-sort-search | English Version](#chakra-ui-table-w-pagination-sort-search--english-version)
- [Getting started](#getting-started)
  - [Install](#install)
    - [Props](#props)
    - [Import and use](#import-and-use)
  - [Example](#example)
  - [Demo](#demo)
  - [Contribute](#contribute)

# Getting started

## Install

`npm install table-pagination-chakra-ui`

[npm Module](https://www.npmjs.com/package/table-pagination-chakra-ui)

### Props

`pageSize` : {Number} - The number of items to be displayed per page

`setPageSize`: {Function} - Setter for pageSize

`pageIndex`: {Number} - The index of the current page in the table pagination

`setPageIndex`: {Function} - Setter for pageIndex

`totalItemsCount`: {Number} - The length of the data array to be displayed in the table

`pageSizeOptions`: {Array.Number} - Options for the number of items that can be displayed per page. - `Default = [10,25,50]`

`colorScheme`: Color of the pagination - `Default = "teal"`

`showOptions`: {Boolean} - Show options - `Default = true`

`labelOptions`: {String} - Options label - `Default = "Items displayed"`

`showQuantity`: {Boolean} - Show quantity - `Default = true`

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

## Contribute

We welcome contributions to this project! To get started, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.

2. **Clone your fork**: Use the following command to clone your forked repository to your local machine.
  ```bash
  git clone https://github.com/your-username/chakra-ui-table-w-pagination-sort-search.git
  ```

3. **Create a new branch**: Create a new branch for your feature or bugfix.
  ```bash
  git checkout -b my-feature-branch
  ```

4. **Make your changes**: Implement your feature or fix the bug.

5. **Commit your changes**: Commit your changes with a descriptive commit message.
  ```bash
  git commit -m "Description of the feature or fix"
  ```

6. **Push to your fork**: Push your changes to your forked repository.
  ```bash
  git push origin my-feature-branch
  ```

7. **Create a pull request**: Go to the original repository and create a pull request from your forked repository. Provide a clear description of your changes and why they should be merged.

We will review your pull request and provide feedback. Thank you for contributing!