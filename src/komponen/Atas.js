import React from 'react';
import {DropdownButton, Dropdown, Row, Col, Navbar, Breadcrumb} from 'react-bootstrap';



function Atas() {
	return(
		<>
			<Row className="table-dark">
			  <Col sm={3}>
			  	<DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
				  <Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
				  <Dropdown.Item href="#/action-2">English</Dropdown.Item>
				  <Dropdown.Item href="#/action-3">Javanese</Dropdown.Item>
				</DropdownButton>
			  </Col>
			  <Col sm={6}>
			  
			  </Col>
			  <Col sm={3}>
			  <center>		  						
					    <Navbar.Brand>					    
					      <img
					        alt=""
					        src="https://www.flaticon.com/svg/static/icons/svg/860/860784.svg"
					        width="30"
					        height="30"
					      /><br/>  
					        Muhammad Iqbal
					    </Navbar.Brand>
				</center>				
			  </Col>			
			</Row>
			<Row>
			 <Col sm={4}>
			  	
			  </Col>
			  <Col sm={4}>
			  	
			  </Col>
			  <Col sm={4}>
			  	<Breadcrumb>
				  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
				  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
				</Breadcrumb>
			  </Col>
			</Row>		
		</>
		)
}
export default Atas;