import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Home() {
   return (
      <Container style={{ maxWidth: '500px' }}>
         <h1 className="text-center mt-3">Contact us</h1>
         <Form>

            <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text>We will never share your email with anyone else</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
               <Form.Label>Example textarea</Form.Label>
               <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button type="submit" variant="primary">Submit</Button>

         </Form>
      </Container>
   )
}