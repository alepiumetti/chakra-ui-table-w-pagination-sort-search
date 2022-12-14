let direction = "asc";

/**
 * Dado un array y un nombre de propiedad ordena un array de datos
 * @function
 * @name sortData
 * @param {String} field Nombre de la propiedad por la que se desea ordenar
 * @param {Array} data Array de datos que se desean ordenar
 * @returns {Array} Datos ordenados
 * @returns {String} Direccion de ordenamiento
 */

export const sortData = (field, data) => {
	//Cambia el sentido del sort
	if (direction === "asc") {
		direction = "des";
	} else {
		direction = "asc";
	}

	// Divide los field en el caso de que sea una propiedad anidada en un objeto

	let name = field.split(".");

	const sortedData = data.sort((a, b) => {
		let x = a;
		let y = b;

		// Apunta la referencia al lugar que indica el field
		// Agregando cada propiedad a la referencia del objeto

		for (let index = 0; index < name.length; index++) {
			x = x[name[index]];
			y = y[name[index]];
		}

		//Si es un número lo pasea a numero y lo ordena

		if (
			!isNaN(x) &&
			!isNaN(y) &&
			typeof x !== "boolean" &&
			typeof y !== "boolean"
		) {
			x = parseInt(x);
			y = parseInt(y);

			if (direction === "asc") {
				return x - y;
			} else {
				return y - x;
			}
		} else if (typeof x == "string" && typeof y == "string") {
			//Si es un string, lo pasa a minusculas y lo ordena (con localeCompare)
			x = x.toLowerCase();
			x = x.trim();
			y = y.toLowerCase();
			y = y.trim();
			if (direction === "asc") {
				return x.localeCompare(y);
			} else {
				return y.localeCompare(x);
			}
		} else if (Date.parse(x) && Date.parse(y)) {
			// Si es una fecha lo parsea a ms y lo ordena

			x = Date.parse(x);
			y = Date.parse(y);
			if (direction === "asc") {
				return x - y;
			} else {
				return y - x;
			}
		} else if (typeof x === "boolean" && typeof y === "boolean") {
			//Si es booleano los ordena
			if (direction === "asc") {
				return x === y ? 0 : x ? -1 : 1;
			} else {
				return y === x ? 0 : y ? -1 : 1;
			}
		}
		if (direction === "asc") {
			return x - y;
		} else {
			return y - x;
		}
		//cambia el archivo entre asc y desc
	});

	return { sortedData, direction };
};
