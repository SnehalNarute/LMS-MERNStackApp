import React from "react";
import { Container, Row } from "react-bootstrap";

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h2 className="heading register-container">{title}</h2>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
