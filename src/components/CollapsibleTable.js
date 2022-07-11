import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Rank", minWidth: 170 },
  { id: "code", label: "Club", minWidth: 100 },
  {
    id: "population",
    label: "Record",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "ELO",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("1", "ColomBraZealand", "22-1", 2302),
  createData("2", "Sidemen FC", "39-7", 2289),
  createData("3", "Inter Your Nan", "20-2", 2251),
  createData("4", "Valderrama FC", "35-6", 2240),
  createData("5", "Goby the Savior", "18-4", 2201),
  createData("6", "Crister Ronaldo", "39-10", 2187),
  createData("7", "Bald Fraud FC", "11-1", 2105),
  createData("8", "IE", 4857000, 70273),
  createData("9", "MX", 126577691, 1972550),
  createData("10", "JP", 126317000, 377973),
  createData("11", "FR", 67022000, 640679),
  createData("12", "GB", 67545757, 242495),
  createData("13", "RU", 146793744, 17098246),
  createData("14", "NG", 200962417, 923768),
  createData("15", "BR", 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        border: "1px solid #F05742",
        backgroundColor: "black",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                    color: "white",
                    backgroundColor: "black",
                    borderBottom: "1px solid #F05742",
                    fontSize: 16,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            color: "white",
                            borderBottom: "1px solid #F05724",
                            fontSize: 14,
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          color: "white",
          ":displayedRows": {
            fontFamily: "Poppins, sans-serif",
          },
        }}
      />
    </Paper>
  );
}
