import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  IconButton,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ButtonPagination = (props) => {
  const {
    children,
    index,
    setPageIndex,
    pageIndex,
    colorScheme = "teal",
  } = props;

  return (
    <Button
      size="sm"
      onClick={() => {
        setPageIndex(index);
      }}
      colorScheme={colorScheme}
      variant={pageIndex === index ? "solid" : "link"}
    >
      {children}
    </Button>
  );
};

/**
 *
 * Paginación de datos para las tablas
 *
 * @component
 * @param {Number} pageSize Es la cantidad de items que se van a ver por página
 * @param {Function} setPageSize Setter de pageSize
 * @param {Number} pageIndex Es la indice en el cual nos encontramos dentro de la paginación de la tabla
 * @param {Function} setPageIndex Setter de pageIndex
 * @param {Number} totalItemCount Es el largo del array de datos que se va a mostrar en la tabla
 * @param {Array.Number} pageSizeOptions Son las opciones de cantidades de items que se pueden mostrar por página. - Default = [10,25,50]
 * @param {String} colorScheme - Color de estilo de la paginación - Default = "teal"
 * @param {Boolean} showOptions - Muestra las opciones - Default = true
 * @param {String} labelOptions - Etiqueta de opciones - Default = "Items mostrados"
 * @param {Boolean} showQuantity - Muestra cantidad - Default = false
 * @return {Component} Componente de paginación de tablas.
 */

const PaginationTable = (props) => {
  const {
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    totalItemsCount,
    pageSizeOptions = [10, 25, 50],
    showOptions = true,
    labelOptions = "Items mostrados",
    colorScheme = "teal",
    showQuantity = false,
  } = props;

  const showButtons = () => {
    let buttons = [];
    const TOTAL_INDEX = Math.ceil(totalItemsCount / pageSize);
   
    if (TOTAL_INDEX <= 5) {
      for (let index = 0; index < TOTAL_INDEX; index++) {
        buttons.push(
          <ButtonPagination
            colorScheme={colorScheme}
            setPageIndex={setPageIndex}
            index={index}
            pageIndex={pageIndex}
          >
            {index + 1}
          </ButtonPagination>
        );
      }
    } else {
      let start = Math.max(0, pageIndex - 2);
      let end = Math.min(TOTAL_INDEX - 1, start + 4);
  
      if (end === TOTAL_INDEX - 1) {
        start = Math.max(0, end - 4);
      }
  
      for (let index = start; index <= end; index++) {
        buttons.push(
          <ButtonPagination
            colorScheme={colorScheme}
            setPageIndex={setPageIndex}
            index={index}
            pageIndex={pageIndex}
          >
            {index + 1}
          </ButtonPagination>
        );
      }
    }
  
    // Si en el indice que está es mayor a cero muestra el boton para volver atrás
    buttons.unshift(
      <IconButton
        icon={<ArrowLeftIcon />}
        size="sm"
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
        isDisabled={!(pageIndex > 0)}
        colorScheme={colorScheme}
        variant="link"
      >
        Atras
      </IconButton>
    );
  
    buttons.push(
      <IconButton
        icon={<ArrowRightIcon />}
        size="sm"
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
        isDisabled={!(pageIndex + 1 < TOTAL_INDEX)}
        colorScheme={colorScheme}
        variant="link"
      >
        Atras
      </IconButton>
    );
  
    return buttons;
  };
  
  
  return (
    <ChakraProvider>
      <HStack w="100%" p={2}>
        <HStack w="40%">
          {showOptions && (
            <>
              <Text fontSize="sm"> {labelOptions}: </Text>
              <Select
                w="auto"
                size="sm"
                variant="unstyled"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(e.target.value);
                }}
              >
                {pageSizeOptions.map((opt) => (
                  <option key={opt.id} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>

              {showQuantity && (
                <Text fontSize="sm">Total: {totalItemsCount}</Text>
              )}
            </>
          )}
        </HStack>
        <Box w="60%" justifyContent="right" display="flex">
          <HStack>{showButtons()}</HStack>
        </Box>
      </HStack>
    </ChakraProvider>
  );
};

export default PaginationTable;

