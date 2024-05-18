// @ts-nocheck
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SimpleTable = ({ rows, title, cellsHeaders, rowsKeys }: any) => {
  return (
    <TableContainer
      component={Paper}
      style={{ boxShadow: 'none', backgroundColor: 'none' }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead key={title}>
          <TableRow>
            {cellsHeaders.map((cell: any, index: number) => (
              <TableCell
                align={cell.align}
                key={index}
                style={{
                  color: '#060606',
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                }}
              >
                {cell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={rowsKeys[0].key}>
              {rowsKeys.map((key) => (
                <TableCell
                  align={key.align}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: 'Poppins',
                  }}
                >
                  {key.isComponent ? row.actions : row[key.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
