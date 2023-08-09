import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	HStack,
	IconButton,
	Select,
	Text,
} from "@chakra-ui/react";
import React from "react";

const ButtonPagination = (props) => {
	const { children, index, setPageIndex, pageIndex } = props;

	return (
		<Button
			size='sm'
			onClick={() => {
				setPageIndex(index);
			}}
			colorScheme='teal'
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

		const totalIndex = parseInt(totalItemsCount / pageSize);

		if (totalIndex < 5) {
			for (
				let index = 0;
				index < parseInt(totalItemsCount / pageSize);
				index++
			) {
				buttons.push(
					<ButtonPagination
						setPageIndex={setPageIndex}
						index={index}
						pageIndex={pageIndex}
					>
						{index + 1}
					</ButtonPagination>
				);
			}
		}

		if (totalIndex > 5) {
			if (pageIndex < 3) {
				for (let index = 0; index < 5; index++) {
					buttons.push(
						<ButtonPagination
							setPageIndex={setPageIndex}
							index={index}
							pageIndex={pageIndex}
						>
							{index + 1}
						</ButtonPagination>
					);
				}
			} else if (pageIndex >= totalIndex - 2) {
				for (
					let index = totalIndex - 5;
					index < parseInt(totalItemsCount / pageSize);
					index++
				) {
					buttons.push(
						<ButtonPagination
							setPageIndex={setPageIndex}
							index={index}
							pageIndex={pageIndex}
						>
							{index + 1}
						</ButtonPagination>
					);
				}
			} else {
				for (let index = pageIndex - 2; index < pageIndex + 3; index++) {
					buttons.push(
						<ButtonPagination
							setPageIndex={setPageIndex}
							index={index}
							pageIndex={pageIndex}
						>
							{index + 1}
						</ButtonPagination>
					);
				}
			}
		}

		// Si en el indice que está es mayor a cero muestra el boton para volver atrás
		buttons.unshift(
			<IconButton
				icon={<ArrowLeftIcon />}
				size='sm'
				onClick={() => {
					setPageIndex(pageIndex - 1);
				}}
				isDisabled={!(pageIndex > 0)}
				colorScheme='teal'
				variant='link'
			>
				Atras
			</IconButton>
		);

		buttons.push(
			<IconButton
				icon={<ArrowRightIcon />}
				size='sm'
				onClick={() => {
					setPageIndex(pageIndex + 1);
				}}
				isDisabled={!(pageIndex + 1 < parseInt(totalItemsCount / pageSize))}
				colorScheme='teal'
				variant='link'
			>
				Atras
			</IconButton>
		);

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
