import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Grid2 from '@mui/material/Unstable_Grid2';
import { blue } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/system';

const container = {
  borderColor: "blue",
  borderStyle: "solid",
  borderWidth: "1px",
}

export default function App() {
  return (
      // Default spacing is 8:1
      <Grid2 container sx={{my : 5}} columnSpacing={{xs : 3}} rowSpacing={{xs : 3}}>
        <Grid2 xsOffset={2} xs={4}>
          <div style={{...container, height: "524px"}}>
            Box2
          </div>
        </Grid2>
        
        <Grid2 container xs={4}>
          <Grid2 xs={12}>
            <div style={{...container, height: "250px"}}>
              Box1
            </div>
          </Grid2>
          <Grid2 xs={12}>
            <div style={{...container, height: "250px"}}>
              Box3
            </div>
          </Grid2>
        </Grid2>
        <Grid2 xs={2}/>

          <Grid2 container columns={24} xs={24}>
            <Grid2 xsOffset={4} xs={2}>
              <div style={{...container, height: "30px", width: "30px"}}>
                ic1
              </div>
            </Grid2>

            <Grid2 xs={3}>
              <div style={{...container, height: "30px", width: "100%"}}>
                drp1
              </div>
            </Grid2>

            <Grid2 xs={3}>
              <div style={{...container, height: "30px", width: "100%"}}>
                bt1
              </div>
            </Grid2>
          </Grid2>

        <Grid2 lgOffset={2} xs={4}>
          <div style={{...container, height: "250px"}}>
            Box4
          </div>
        </Grid2>
        <Grid2 xs={4}>
          <div style={{...container, height: "250px"}}>
            Box5
          </div>
        </Grid2>
        <Grid2 lgOffset={2} xs={4}>
          <div style={{...container, height: "175px"}}>
            Box6
          </div>
        </Grid2>
        <Grid2 xs={4}>
          <div style={{...container, height: "175px"}}>
            Box7
          </div>
        </Grid2>
      </Grid2>
  );
}
