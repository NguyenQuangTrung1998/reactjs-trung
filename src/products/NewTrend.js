import React, { Component } from 'react';
import {Container,Row,Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import './NewTrend.css';
import balence1 from '../images/balence1.jpg';
import searchItem from '../images/search.svg'
class NewTrend extends Component {
 render(){
  return (
    <Container>
        <h5 className="trend">xu hướng thời trang mới </h5>
        <Row> 
        <Col md={3}>
            <Card className="cart">
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>thêm vào giỏ</Button>
                </CardBody>
            </Card>
         </Col>
         
        </Row>
    </Container>
  );
 }
}

export default NewTrend;
