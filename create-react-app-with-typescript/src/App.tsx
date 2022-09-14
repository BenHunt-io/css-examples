import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Grid2 from '@mui/material/Unstable_Grid2';
import { blue } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/system';
import { useState } from 'react';
import Button from '@mui/material/Button/Button';

const container = {
  borderColor: "blue",
  borderStyle: "solid",
  borderWidth: "1px",
}




export default function App() {

  const [borderOn, setBorderOn] = useState(true);

  const borders = {
    "visibility": borderOn ? "hidden" : "visible"
  }

  const Box = (props: any) => {
    return <div style={{
        visibility: borderOn ? "visible" : "hidden",
        borderColor: "blue",
        borderStyle: "solid",
        borderWidth: "1px"
      }}>
      {props.children}
    </div>
  }


  return (
      
      // Default spacing is 8:1
      <Grid2 justifyContent="center" container sx={{my : 5}} spacing={3}>

      {/* Tool for making bordered components
        <Grid2 container xs={12}>
          <Grid2 xs={4}>
            <Button
              onClick={(e) => setBorderOn(!borderOn)}>
              toggle
            </Button>
            <Box>
              <div style={{...borders}}>test</div>
            </Box>
          </Grid2>
        </Grid2> */}

        <Grid2 xs={4} maxWidth="600px">
          <div style={{...container, height: "524px"}}>
            Box1
          </div>
        </Grid2>
        
        <Grid2 container xs={4} maxWidth="624px">
          <Grid2 xs={12} maxWidth="600px">
            <div style={{...container, height: "250px"}}>
              Box2
            </div>
          </Grid2>
          <Grid2 xs={12} maxWidth="600px">
            <div style={{...container, height: "250px"}}>
              Box3
            </div>
          </Grid2>
        </Grid2>

          <Grid2 justifyContent="center" container columns={24} xs={24}>
            <Grid2 xs={2} maxWidth="150px">
              <div style={{...container, height: "30px", width: "30px"}}>
                ic1
              </div>
            </Grid2>

            <Grid2 xs={3} maxWidth="225px">
              <div style={{...container, height: "30px", width: "100%"}}>
                drp1
              </div>
            </Grid2>

            <Grid2 xs={3} maxWidth="225px">
              <div style={{...container, height: "30px", width: "100%"}}>
                bt1
              </div>
            </Grid2>

            <Grid2 xs={8} maxWidth="600px"/>
          </Grid2>

        <Grid2 xs={4} maxWidth="600px">
          <div style={{...container, height: "250px"}}>
            Box4
          </div>
        </Grid2>
        <Grid2 xs={4} maxWidth="600px">
          <div style={{...container, height: "250px"}}>
            Box5
          </div>
        </Grid2>
        <Grid2 xs={12} padding="0px 0px 0px 0px"/>

        <Grid2 xs={4} maxWidth="600px">
          <div style={{...container, height: "175px"}}>
            Box6
          </div>
        </Grid2>
        <Grid2 xs={4} maxWidth="600px">
          <div style={{...container, height: "175px"}}>
            Box7
          </div>
        </Grid2>
      </Grid2>
  );
}
