import React from 'react'
import { Link } from 'react-router-dom';
import './select.css'


// import  * as Mui from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';



function BasicSelect({fontSize}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='SelectSmall'>
            <Box sx={{ minWidth: 110 }} size="small">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small" sx={{fontSize: '10px'}}>Filter</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{
                            width: '150px',
                            height: '30px',
                            fontSize: fontSize
                        }}
                        
                    >
                        <MenuItem value="">
                            <em>請選擇</em>
                        </MenuItem>
                        <MenuItem value={10}>最新</MenuItem>
                        <MenuItem value={20}>價錢由高至低</MenuItem>
                        <MenuItem value={30}>價錢由低至高</MenuItem>
                        {/* <MenuItem value={40}>Thirty</MenuItem>
                        <MenuItem value={50}>Thirty</MenuItem> */}
                    </Select>
                </FormControl>
            </Box>

        </div>

    )
}

export default BasicSelect