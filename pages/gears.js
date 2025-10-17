import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import gears from "../components/data/gears";

const GearsPage = () => {
  return (
      <section id="gears" style={{ padding: "50px 0" }}>
        <Container>
          <Row>
            {gears.map((item) => (
              <Col key={item.id} lg="4" md="6" sm="6" className="mb-4">
                <div
                  style={{
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    backgroundColor: "white",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.05) translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                    e.currentTarget.style.borderColor = "#007ced";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 4px rgba(0,0,0,0.1)";
                    e.currentTarget.style.borderColor = "#ddd";
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      marginBottom: "15px",
                    }}
                  />
                  <h5 style={{ marginBottom: "10px", color: "#333" }}>
                    {item.title}
                  </h5>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      marginBottom: "15px",
                    }}
                  >
                    {item.subtitle}
                  </p>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      backgroundColor: "#007ced",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontSize: "14px",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0056b3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#007ced";
                    }}
                  >
                    View on Amazon
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  
  );
};

export default GearsPage;
