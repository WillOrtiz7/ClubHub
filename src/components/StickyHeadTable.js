import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import JoinMatch from "./JoinMatch";

const leaderboardColumns = [
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

const findMatchColumns = [
  { id: "date", label: "Time", minWidth: 170 },
  { id: "homeClub", label: "Home Club", minWidth: 100 },
  {
    id: "awayClub",
    label: "Away Club",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "matchElo",
    label: "Match ELO",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createLeaderboardData(rank, clubName, record, elo) {
  return { rank, clubName, record, elo };
}
function createFindMatchData(date, homeClub, awayClub, matchElo) {
  return { date, homeClub, awayClub, matchElo };
}

const pcRowsLeaderboard = [
  createLeaderboardData("1", "ColomBraZealand", "22-1", 2302),
  createLeaderboardData("2", "Sidemen FC", "39-7", 2289),
  createLeaderboardData("3", "Inter Your Nan", "20-2", 2251),
  createLeaderboardData("4", "Valderrama FC", "35-6", 2240),
  createLeaderboardData("5", "Goby the Savior", "18-4", 2201),
  createLeaderboardData("6", "Crister Ronaldo", "39-10", 2187),
  createLeaderboardData("7", "Bald Fraud FC", "11-1", 2105),
];
const xboxRowsLeaderboard = [
  createLeaderboardData("1", "XBOX", "26-2", 2291),
  createLeaderboardData("2", "Deez", "32-4", 2289),
  createLeaderboardData("3", "Inter Your Nan", "18-2", 2210),
  createLeaderboardData("4", "Valderrama FC", "40-7", 2201),
  createLeaderboardData("5", "Goby the Savior", "20-6", 2175),
  createLeaderboardData("6", "Crister Ronaldo", "29-8", 2166),
  createLeaderboardData("7", "Bald Fraud FC", "13-2", 2100),
];
const playstationRowsLeaderboard = [
  createLeaderboardData("1", "PS5", "22-1", 2302),
  createLeaderboardData("2", "Sidemen FC", "39-7", 2289),
  createLeaderboardData("3", "Inter Your Nan", "20-2", 2251),
  createLeaderboardData("4", "Valderrama FC", "35-6", 2240),
  createLeaderboardData("5", "Goby the Savior", "18-4", 2201),
  createLeaderboardData("6", "Crister Ronaldo", "39-10", 2187),
  createLeaderboardData("7", "Bald Fraud FC", "11-1", 2105),
];
const xboxRowsFindMatch = [
  createFindMatchData(
    "07/29/2022 9:00 PM EST",
    "Find a match xbox",
    "No opponent",
    2304
  ),
  createFindMatchData(
    "07/29/2022 9:30 PM EST",
    "Sidemen FC",
    "No opponent",
    2291
  ),
  createFindMatchData(
    "07/29/2022 10:00 PM EST",
    "Inter Your Nan",
    "No opponent",
    2253
  ),
  createFindMatchData(
    "07/29/2022 10:15 PM EST",
    "Valderrama FC",
    "No opponent",
    2242
  ),
  createFindMatchData(
    "07/29/2022 11:00 PM EST",
    "Goby the Savior",
    "No opponent",
    2203
  ),
  createFindMatchData(
    "07/29/2022 11:30 PM EST",
    "Crister Ronaldo",
    "No opponent",
    2189
  ),
  createFindMatchData(
    "07/29/2022 11:30 PM EST",
    "Bald Fraud FC",
    "No opponent",
    2107
  ),
];
const pcRowsFindMatch = [
  createFindMatchData("1", "Find a match pc", "No opponent", 2302),
  createFindMatchData("2", "Sidemen FC", "No opponent", 2289),
  createFindMatchData("3", "Inter Your Nan", "No opponent", 2251),
  createFindMatchData("4", "Valderrama ", "No opponent", 2240),
  createFindMatchData("5", "Goby the Savior", "No opponent", 2201),
  createFindMatchData("6", "Crister Ronaldo", "No opponent", 2187),
  createFindMatchData("7", "Bald Fraud FC", "No opponent", 2105),
];
const playstationRowsFindMatch = [
  createFindMatchData("1", "Find a match PS", "No opponent", 2309),
  createFindMatchData("2", "Sidemen FC", "No opponent", 2292),
  createFindMatchData("3", "Inter Your Nan", "No opponent", 2253),
  createFindMatchData("4", "Valderra", "No opponent", 2241),
  createFindMatchData("5", "Goby the Savior", "No opponent", 2202),
  createFindMatchData("6", "Crister Ronaldo", "No opponent", 2188),
  createFindMatchData("7", "Bald Fraud FC", "No opponent", 2106),
];

let columns = [];
let rows = [];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const platform = props.platform;

  // Set rows for both components
  rows =
    platform === "leaderboard-xbox"
      ? xboxRowsLeaderboard
      : platform === "leaderboard-pc"
      ? pcRowsLeaderboard
      : platform === "leaderboard-playstation"
      ? playstationRowsLeaderboard
      : platform === "find-match-xbox"
      ? xboxRowsFindMatch
      : platform === "find-match-pc"
      ? pcRowsFindMatch
      : platform === "find-match-playstation"
      ? playstationRowsFindMatch
      : rows;

  columns =
    props.root === "leaderboard" ? leaderboardColumns : findMatchColumns;
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
                  // These cells require a unique id, make sure to update this
                  key={
                    props.root === "leaderboard" ? column.rank : column.matchElo
                  }
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
                      if (value === "No opponent") {
                      }
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          component={value === "No opponent" ? JoinMatch : null}
                          opponent={"New Opponent"}
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
