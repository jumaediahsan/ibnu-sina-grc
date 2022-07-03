import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Paper, Box, Card, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import '../App.css';
import AppBar from '../components/AppBar';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: '#EEEEEE',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

class Rab extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div>
        <AppBar />
        <RootStyle>
          <Paper elevation={3} style={{ height: 900, width: 850, marginTop: 50 }}>
                <Typography>haiiiii</Typography>
          </Paper>
        </RootStyle>
      </div>
    );
  }
}

export default Rab;


{/* <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
<input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
<input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
<input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
<button onClick={this.createAndDownloadPdf}>Download PDF</button> */}
