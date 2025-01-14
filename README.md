# chakra-ui-table-w-pagination-sort-search | Spanish Version
Componente de tablas con paginación para Chakra-UI V2

[README en inglés](readme_en.md)

![demo-dif](demo-gif.gif)

- [chakra-ui-table-w-pagination-sort-search | Spanish Version](#chakra-ui-table-w-pagination-sort-search--spanish-version)
- [Comenzando](#comenzando)
  - [Instalación](#instalación)
    - [Props](#props)
    - [Importar y usar](#importar-y-usar)
  - [Ejemplo](#ejemplo)
  - [Demo](#demo)
- [Contribuir](#contribuir)
  - [Contribuir](#contribuir-1)

# Comenzando

## Instalación

`npm install table-pagination-chakra-ui`

[Módulo npm](https://www.npmjs.com/package/table-pagination-chakra-ui)

### Props

`pageSize` : {Number} - Es la cantidad de ítems que se van a ver por página

`setPageSize`: {Function} - Setter de pageSize

`pageIndex`: {Number} - Es el índice en el cual nos encontramos dentro de la paginación de la tabla

`setPageIndex`: {Function} - Setter de pageIndex

`totalItemsCount`: {Number} - Es el largo del array de datos que se va a mostrar en la tabla

`pageSizeOptions`: {Array.Number} - Son las opciones de cantidades de ítems que se pueden mostrar por página. - `Default = [10,25,50]`

`colorScheme`: Color de la paginación - `Default = "teal"`

`showOptions`: {Boolean} - Muestra las opciones - `Default = true`

`labelOptions`: {String} - Etiqueta de opciones - `Default = "Ítems mostrados"`

`showQuantity`: {Boolean} - Muestra cantidad - `Default = true`

### Importar y usar

```javascript
import {PaginationTable} from "table-pagination-chakra-ui"

const your_function = () => {

  return (
    <>    
        
        {/*tu código aquí*/}
        
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

## Ejemplo

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
                  Nombre
              <Th>
                  Apellido
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

# Contribuir

## Contribuir

¡Damos la bienvenida a las contribuciones a este proyecto! Para comenzar, sigue estos pasos:

1. **Haz un fork del repositorio**: Haz clic en el botón "Fork" en la parte superior derecha de esta página para crear una copia de este repositorio en tu cuenta de GitHub.

2. **Clona tu fork**: Usa el siguiente comando para clonar tu repositorio bifurcado en tu máquina local.
  ```bash
  git clone https://github.com/tu-usuario/chakra-ui-table-w-pagination-sort-search.git
  ```

3. **Crea una nueva rama**: Crea una nueva rama para tu característica o corrección de errores.
  ```bash
  git checkout -b mi-rama-de-característica
  ```

4. **Haz tus cambios**: Implementa tu característica o corrige el error.

5. **Confirma tus cambios**: Confirma tus cambios con un mensaje descriptivo.
  ```bash
  git commit -m "Descripción de la característica o corrección"
  ```

6. **Empuja a tu fork**: Empuja tus cambios a tu repositorio bifurcado.
  ```bash
  git push origin mi-rama-de-característica
  ```

7. **Crea un pull request**: Ve al repositorio original y crea un pull request desde tu repositorio bifurcado. Proporciona una descripción clara de tus cambios y por qué deberían fusionarse.

Revisaremos tu pull request y proporcionaremos comentarios. ¡Gracias por contribuir!
