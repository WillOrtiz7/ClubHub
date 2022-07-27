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
  { id: "rank", label: "Rank", minWidth: 170 },
  { id: "clubName", label: "Club", minWidth: 100 },
  {
    id: "record",
    label: "Record",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "elo",
    label: "ELO",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(rank, clubName, record, elo) {
  return { rank, clubName, record, elo };
}

const pcRows = [
  createData("1", "ColomBraZealand", "22-1", 2302),
  createData("2", "Sidemen FC", "39-7", 2289),
  createData("3", "Inter Your Nan", "20-2", 2251),
  createData("4", "Valderrama FC", "35-6", 2240),
  createData("5", "Goby the Savior", "18-4", 2201),
  createData("6", "Crister Ronaldo", "39-10", 2187),
  createData("7", "Bald Fraud FC", "11-1", 2105),
];
const xboxRows = [
  createData("1", "XBOX", "26-2", 2291),
  createData("2", "Deez", "32-4", 2289),
  createData("3", "Inter Your Nan", "18-2", 2210),
  createData("4", "Valderrama FC", "40-7", 2201),
  createData("5", "Goby the Savior", "20-6", 2175),
  createData("6", "Crister Ronaldo", "29-8", 2166),
  createData("7", "Bald Fraud FC", "13-2", 2100),
];
const playstationRows = [
  createData("1", "PS5", "22-1", 2302),
  createData("2", "Sidemen FC", "39-7", 2289),
  createData("3", "Inter Your Nan", "20-2", 2251),
  createData("4", "Valderrama FC", "35-6", 2240),
  createData("5", "Goby the Savior", "18-4", 2201),
  createData("6", "Crister Ronaldo", "39-10", 2187),
  createData("7", "Bald Fraud FC", "11-1", 2105),
];

let rows = [];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const platform = props.platform;

  rows =
    platform === "leaderboard-xbox"
      ? xboxRows
      : platform === "leaderboard-pc"
      ? pcRows
      : platform === "leaderboard-playstation"
      ? playstationRows
      : rows;

  console.log("props.platform: ", props.platform);
  console.log("rows: ", rows);

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
        border: "1px solid gray",
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
                    backgroundColor: "#F05742",
                    borderBottom: "1px solid gray",
                    fontSize: 12,
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.clubName}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            color: "white",
                            borderBottom: "1px solid gray",
                            fontSize: 10,
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
