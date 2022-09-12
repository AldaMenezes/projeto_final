import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <section className="footer section">
      <Container>
        <Row className="mt-2">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">
                Todos os Direitos Reservados a CriptoSpace© 2022
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
