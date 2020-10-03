import React from 'react';
import {Col, Jumbotron, ListGroup, Form, Row, Button, Navbar} from 'react-bootstrap';


import Pemberitahuan from './Pemberitahuan';




function Bawah() {
	return(
		<>
		<Row>				
		<Col sm={3}>
		<ListGroup as="ul">
		<ListGroup.Item as="li" active>
		Liga 1 Indonesia
		</ListGroup.Item>
		<ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
		<ListGroup.Item as="li" disabled>
		Divisi Primera
		</ListGroup.Item>
		<ListGroup.Item as="li">Seri A</ListGroup.Item>
		<ListGroup.Item as="li">Ligue 1</ListGroup.Item>
		<ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
		</ListGroup>
		</Col>
		<Col sm={6}>
		<Jumbotron>
		<h1>Divisi Primera</h1>
		<p>
		Main untuk Catalunya, Gerard Pique Minta Dihormati.
		</p>
		<p>
		<Button variant="primary">Read more</Button>
		</p>
		</Jumbotron>
		</Col>
		<Col sm={3}>
		<center>
		<Navbar.Brand>					    
		<img
		 alt=""
		 src="https://www.flaticon.com/svg/static/icons/svg/295/295128.svg"
		 width="30"
		 height="30"
		/><br/>  
		<b>Silahkan Login</b>
		</Navbar.Brand>
		</center>
		<Form>
		<Form.Group controlId="formBasicEmail">				    
		<Form.Control type="email" placeholder="Enter email" />				    
		</Form.Group>
		<Form.Group controlId="formBasicPassword">				    
		<Form.Control type="password" placeholder="Password" />
		</Form.Group>
		<Form.Group controlId="formBasicCheckbox">
		<Form.Check type="checkbox" label="Term & Conditions" />
		</Form.Group>
		<Pemberitahuan/>
		</Form>
		</Col>
		</Row>		
		</>
		)
	}
	export default Bawah;