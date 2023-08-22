import { Box, Center, Code, Divider, Text } from "@chakra-ui/react";
import "./App.css";
import TablePaginacion from "./TablePaginationSort/TablePaginacion.jsx";

function App() {
  return (
    <Box p={10} w="100vwm" h="100%">
      <Center>
        <Text fontSize="2xl" fontWeight="bold">
          Table W/ Pagination - Default
        </Text>
      </Center>
      <Divider />

      <Box borderRadius={7} borderWidth={1} p={5}>
        <TablePaginacion />
      </Box>
    </Box>
  );
}

export default App;
