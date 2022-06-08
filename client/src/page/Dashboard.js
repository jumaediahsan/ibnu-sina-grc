import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent } from '@mui/material';

import AppBar from '../components/AppBar';


const RootStyle = styled(Card)(({ theme }) => ({
 boxShadow: 'none',
 textAlign: 'center',
 backgroundColor: theme.palette.primary.light,
 [theme.breakpoints.up('md')]: {
  height: '100%',
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'space-between'
 }
}));

const Dashboard = () => {
 return (
  <div>
   <AppBar />
   <RootStyle>
    <CardContent
     sx={{
      p: { md: 0 },
      pl: { md: 5 },
      color: 'grey.800'
     }}
    >
     <Typography gutterBottom variant="h4">
      Welcome back,
      <br /> {'Jumaedi Ahsan'}
     </Typography>

     <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
     </Typography>

     <Button variant="contained" to="#" >
      Go Now
     </Button>
    </CardContent>
   </RootStyle>
  </div>
 )
}

export default Dashboard;