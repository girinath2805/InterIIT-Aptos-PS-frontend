import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdOutlineContentCopy } from "react-icons/md";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#d3d3d3',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#c5c6d0',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(address, amount, time, date, hash) {
  return { address, amount, time, date, hash };
}

const rows = [
  createData('0x3D980E50508...', 0.049, '2 mins ago', 'Nov 28, 2023', '0xabc...'),
  createData('0x688F8402AEB...', 0.029, '15 mins ago', 'Nov 28, 2023', '0xdef...'),
  createData('0x6D57D9AD72B...', 0.079, '1 hour ago', 'Nov 28, 2023', '0xghi...'),
  createData('0x88FD40B080F...', 0.109, '2 hours ago', 'Nov 28, 2023', '0xjkl...'),
  createData('0x3D6F340B8A2...', 0.039, '3 hours ago', 'Nov 28, 2023', '0xlmn...'),
];

const CopyToClipboard = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <span onMouseEnter={() => setCopySuccess('Copy')} onMouseLeave={() => setCopySuccess('')} onClick={copyToClipboard} style={{ cursor: copySuccess === 'Copied!' ? 'default' : 'pointer' }}>
      {text}
      {copySuccess && <span className='ml-2 flex flex-row mt-2 gap-2 bg-black w-min text-gray-300 rounded-lg p-2'><MdOutlineContentCopy fontSize={20}/>{copySuccess}</span>}
    </span>
  );
};

const RevenueHistory = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center text-center text-4xl font-extrabold mt-7 py-7 font-welcome'>
        Transaction History
      </div>
      <div className='mx-10'>
        <TableContainer component={Paper} sx={{borderRadius:'10px'}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell align="right">Amount (in APT)</StyledTableCell>
                <StyledTableCell align="right">Time</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Transaction Hash</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.address}>
                  <StyledTableCell component="th" scope="row">
                    <CopyToClipboard text={row.address} />
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">{row.time}</StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right"><a href={`https://aptoscan.com/tx/${row.hash}`} target="_blank" rel="noopener noreferrer">{row.hash}</a></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default RevenueHistory
