import React from 'react'
import logo from "../page/img/Hodlinfo.png";
import "../page/cs/navbar.css"
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const useStyles = makeStyles(theme=>({
  
    type: {
      marginRight:"15px",
    },
    hover: {
        marginRight:"15px"
      },
  }));
const Navbar = () => {
    const classes=useStyles();
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }
  return (
    <nav className='navbar'>
        <div className='company_logo'>
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className='currency'>
        <Box className={classes.type}>
        <FormControl  size="small" sx={{ color: 'white', borderColor: 'black', backgroundColor: '#2e3241', minWidth: 100}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em style={{color:"#fff"}}>INR</em>
          </MenuItem>
          <MenuItem value={10}>INR</MenuItem>
        </Select>
      </FormControl>
        </Box>
    <Box className={classes.type}>
          <FormControl  size="small" sx={{ color: 'white', borderColor: 'black', backgroundColor: '#2e3241', minWidth: 100}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em style={{color:"#fff"}}>BTC</em>
          </MenuItem>
          <MenuItem value={10}>BTC</MenuItem>
          <MenuItem value={20}>ETH</MenuItem>
          <MenuItem value={30}>USDT</MenuItem>
          <MenuItem value={10}>XRP</MenuItem>
          <MenuItem value={20}>TRX</MenuItem>
          <MenuItem value={30}>DASH</MenuItem>
          <MenuItem value={10}>ZEC</MenuItem>
          <MenuItem value={20}>XEM</MenuItem>
          <MenuItem value={30}>IOST</MenuItem>
          <MenuItem value={10}>WIN</MenuItem>
          <MenuItem value={20}>BTT</MenuItem>
          <MenuItem value={30}>WRX</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Box className={classes.type} >
            <Button className={classes.hover} variant="filled"  sx={{ color: 'white', borderColor: 'black', backgroundColor: '#2e3241',"&:hover": {
            bgcolor: "green",
          }, }}>
                BUY BTC
            </Button>
        </Box>
        </div>
        <div className='connection'>
        <Box className={classes.type}>
            <Button className={classes.hover} variant="filled" sx={{ color: 'white', borderColor: 'black', backgroundColor: '#45bec4',"&:hover": {
            bgcolor: "green",
          }, }} startIcon={<TelegramIcon/>}>
               Connect Telegram
            </Button>
        </Box>
        </div>
    </nav>
  )
}

export default Navbar
