
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, TableFooter } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { useEffect } from 'react';
import { fetchSellerProducts } from '../../../Redux/Seller/sellerProductSlice';
import { Product } from '../../../Types/ProductType';
import { Edit } from '@mui/icons-material';

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
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductTable() {
  const dispatch=useAppDispatch();
  const {sellerProduct}=useAppSelector(selector=>selector);
  useEffect(()=>{
    dispatch(fetchSellerProducts(localStorage.getItem("jwt")));
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling price</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Update stock</StyledTableCell>
            <StyledTableCell align="right">update</StyledTableCell>
          </TableRow>
        </TableHead>
       
        <TableBody>
          {sellerProduct.products?.map((item:Product,index:number) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <div className='flex flex-wrap gap-1'>
                {item.images?.map((image,index)=><img className='w-20 rounded-md' key={index} src={image} alt='image'/>)}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{item.title}</StyledTableCell>
              <StyledTableCell align="right">{item.mrpPrice}</StyledTableCell>
              <StyledTableCell align="right">{item.sellingPrice}</StyledTableCell>
              <StyledTableCell align="right">{item.color}</StyledTableCell>
              <StyledTableCell align="right">
                <Button size='small'>
                  in_stock
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton size='small' color='primary'>
                  <Edit/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}