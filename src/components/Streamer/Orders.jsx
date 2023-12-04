import React from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(id, date, address, amount, time, transactionHash) {
  return { id, date, address, amount, time, transactionHash };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    '0xWalletAddress1',
    0.045,
    '10:30 AM',
    '0x1234567890abcdef',
  ),
  createData(
    1,
    '16 Mar, 2019',
    '0xWalletAddress2',
    0.0019,
    '11:45 AM',
    '0xabcdef1234567890',
  ),
  createData(
    2,
    '16 Mar, 2019',
    '0xWalletAddress3',
    0.081,
    '1:15 PM',
    '0x7890abcdef123456',
  ),
  createData(
    3,
    '16 Mar, 2019',
    '0xWalletAddress4',
    .0078,
    '3:00 PM',
    '0x4567890abcdef123',
  ),
  createData(
    4,
    '15 Mar, 2019',
    '0xWalletAddress5',
    .029,
    '4:30 PM',
    '0xabcdef4567890123',
  ),
];
  

const Orders = () => {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Amount (in APT)</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Transaction Hash</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{`${row.amount}`}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.transactionHash}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="revenuehistory" sx={{ mt: 3 }}>
        See more transactions
      </Link>
    </React.Fragment>
  )
}

export default Orders
