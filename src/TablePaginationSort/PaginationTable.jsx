import { Box, Button, HStack, Select, Text } from "@chakra-ui/react";
import React from "react";

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
 * @param {Array.Number} pageSizeOptions Son las opciones de cantidades de items que se pueden mostrar por página.
 * @return {Component} Componente de paginación de tablas.
 */

const PaginationTable = (props) => {
	const {
		pageSize,
		setPageSize,
		pageIndex,
		setPageIndex,
		totalItemsCount,
		pageSizeOptions,
	} = props;

	const showButtons = () => {
		let buttons = [];
		for (let index = 0; index < totalItemsCount / pageSize; index++) {
			buttons.push(
				<Button
					size='sm'
					onClick={() => {
						setPageIndex(index);
					}}
					colorScheme={pageIndex === index ? "teal" : "gray"}
				>
					{index + 1}
				</Button>
			);
		}

		return buttons;
	};

	return (
		<HStack w='100%' p={2}>
			<HStack w='40%'>
				<Text fontSize='sm'> Items mostrados: </Text>
				<Select
					w='auto'
					size='sm'
					variant='unstyled'
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
			</HStack>
			<Box w='60%' justifyContent='right' display='flex'>
				<HStack>{showButtons()}</HStack>
			</Box>
		</HStack>
	);
};

export default PaginationTable;
