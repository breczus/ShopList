import "./WelcomePage.css";
import React from "react";
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText 
 } from 'reactstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WelcomePage(){
    return(
        <main>
        <Container>
        <Row><Col>
        <h1>Witaj na najlepszej drodze by przyśpieszyć twoje zakupy</h1>
        </Col>
        </Row>
        <Row>
        <Col md="6" xs="12">
        <p>Stwórz konto</p>
        <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="adres e-mail" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Hasło</Label>
        <Input type="password" name="password" id="Password" placeholder="Stwórz hasło" />
      </FormGroup>
      <FormGroup>
        <Label for="PasswordCheck">Sprawdź hasło</Label>
        <Input type="password" name="passwordCheck" id="PasswordCheck" placeholder="Powtórz hasło" />
      </FormGroup>
      <Button>Stwórz Konto</Button>
      </Form>
        
        </Col>
        <Col md="6" xs="12"><p>Zaloguj się przez:</p>
        <Row>
        
        <Col md="4" xs="12"><Button color="primary" size="lg">Google</Button></Col>
        <Col md="4" xs="12"><Button color="secondary" size="lg">Facebook</Button></Col>
        <Col md="4" xs="12"><Button color="info" size="lg">GitHub</Button></Col>
       
        </Row>
        </Col>
        </Row>
            </Container>
        </main>
    )
}
export default WelcomePage;