import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

import firstImg from '../../assets/images/01.jpg'
import secondImg from '../../assets/images/02.jpg'
import thirdImg from '../../assets/images/03.jpg'
import fourthImg from '../../assets/images/04.jpg'
import fifthImg from '../../assets/images/05.jpg'

export default function Home() {
   return (
      <Container>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
               <Col sm={3}>
                  <Nav variant="pills" className="flex-column mt-3">
                     <Nav.Item>
                        <Nav.Link eventKey="first">Design</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="second">Programming</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="third">Team</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="fourth">Office Routine</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="fifth">Layouts</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col sm={9}>
                  <Tab.Content className="mt-3">
                     <Tab.Pane eventKey="first">
                        <img src={fifthImg} className="w-100 mb-2" alt="item" />
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Harum tempore labore eum eaque ipsa totam asperiores,
                           sit magnam explicabo excepturi est culpa accusantium ducimus
                           quo ut sequi fugit neque! Perferendis.
                        </p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="second">
                        <img src={fourthImg} className="w-100 mb-2" alt="item" />
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Harum tempore labore eum eaque ipsa totam asperiores,
                           sit magnam explicabo excepturi est culpa accusantium ducimus
                           quo ut sequi fugit neque! Perferendis.
                        </p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="third">
                        <img src={thirdImg} className="w-100 mb-2" alt="item" />
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Harum tempore labore eum eaque ipsa totam asperiores,
                           sit magnam explicabo excepturi est culpa accusantium ducimus
                           quo ut sequi fugit neque! Perferendis.
                        </p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="fourth">
                        <img src={firstImg} className="w-100 mb-2" alt="item" />
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Harum tempore labore eum eaque ipsa totam asperiores,
                           sit magnam explicabo excepturi est culpa accusantium ducimus
                           quo ut sequi fugit neque! Perferendis.
                        </p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="fifth">
                        <img src={secondImg} className="w-100 mb-2" alt="item" />
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                           Harum tempore labore eum eaque ipsa totam asperiores,
                           sit magnam explicabo excepturi est culpa accusantium ducimus
                           quo ut sequi fugit neque! Perferendis.
                        </p>
                     </Tab.Pane>
                  </Tab.Content>
               </Col>
            </Row>
         </Tab.Container>
      </Container>
   )
}