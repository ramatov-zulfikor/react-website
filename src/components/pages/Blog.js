import React from 'react'
import { Card, Col, Container, ListGroup, Media, Row } from 'react-bootstrap'

import img from '../../assets/js.png'

export default function Home() {
   return (
      <Container>
         <Row>
            <Col md={9}>
               <Media className="m-5">
                  <img src={img}
                     width="150"
                     height="150"
                     className="mr-3"
                     alt="blog-img" />
                  <Media.Body>
                     <h5>Blog Post</h5>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique nam dolor fugit possimus iusto aliquid cumque corrupti
                        accusantium velit, ducimus fuga, totam quia expedita!
                        Nisi modi error perferendis numquam consectetur.
                     </p>
                  </Media.Body>
               </Media>
               <Media className="m-5">
                  <img src={img}
                     width="150"
                     height="150"
                     className="mr-3"
                     alt="blog-img" />
                  <Media.Body>
                     <h5>Blog Post</h5>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique nam dolor fugit possimus iusto aliquid cumque corrupti
                        accusantium velit, ducimus fuga, totam quia expedita!
                        Nisi modi error perferendis numquam consectetur.
                     </p>
                  </Media.Body>
               </Media>
               <Media className="m-5">
                  <img src={img}
                     width="150"
                     height="150"
                     className="mr-3"
                     alt="blog-img" />
                  <Media.Body>
                     <h5>Blog Post</h5>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique nam dolor fugit possimus iusto aliquid cumque corrupti
                        accusantium velit, ducimus fuga, totam quia expedita!
                        Nisi modi error perferendis numquam consectetur.
                     </p>
                  </Media.Body>
               </Media>
            </Col>
            <Col md={3}>
               <h5 className="mt-5 mb-3 text-center">Categories</h5>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>HTML/CSS</ListGroup.Item>
                     <ListGroup.Item>JavaScript</ListGroup.Item>
                     <ListGroup.Item>React/Redux</ListGroup.Item>
                     <ListGroup.Item>TypeScript</ListGroup.Item>
                     <ListGroup.Item>MobX</ListGroup.Item>
                  </ListGroup>
               </Card>
               <Card className="mt-4" bg="light">
                  <Card.Body>
                     <Card.Title>Side Widget</Card.Title>
                     <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Similique nam dolor fugit possimus iusto aliquid cumque corrupti
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   )
}