import React from 'react'
import {Grid, Row} from 'react-bootstrap'
import './ListSearch.css';

const ListSearch  = () => (
  <Grid>
    <Row className='Pine'>
    <div>
      <p> Nazwa obiektu</p> <small> odległość [km] </small>
      <small><b> Adres obiektu </b></small>
    </div>
    </Row>
  </Grid>
    );
export default ListSearch