import React, { useEffect, useRef, useState } from 'react'
import { BottomNavigation,BottomNavigationAction, Box, Paper } from '@mui/material'
// import {LocationOn} from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DescriptionIcon from '@mui/icons-material/Description';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import CardStep from '../CardStep';
import MenuPlan from '../MenuPlan';
import GoalCard from '../GoalCard';


// import GoalCard from '../GoalCard';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


function TopNav() {
    const [value, setValue] = useState(0);
    const ref = useRef()
    useEffect(()=>{
        ref.current.ownerDocument.body.scrollTop = 0;

    },[value]);
    return (
        <Box ref={ref} >
        {/* topNav Item */}
        {{
            0:<CardStep/>,
            1:<MenuPlan/>,
            2:<GoalCard/>,
            
        }[value]}
            <Paper
                elevation={3}
                sx={{ position: 'flexd', bottom: 0, left: 0, right: 0, zIndex: 2 }}
                >
                    <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(e,newValue)=>setValue(newValue)}
                    >

                    <BottomNavigationAction label='CreatPlan' icon={<ModeEditIcon />}/>
                    <BottomNavigationAction label='MenuPlan' icon={<DescriptionIcon />}/>
                    <BottomNavigationAction label='Analyze' icon={<InsightsSharpIcon />}/>
                   
                    </BottomNavigation>
                </Paper>
        </Box>
    )
}

export default TopNav