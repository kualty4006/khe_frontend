import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Row,
  Button,
  CardHeader,
  CardGroup,
  CardColumns,
  CardImg,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

//import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import img6 from "../../assets/images/small/img-6.jpg";

import img8 from "../../assets/images/small/pexels-photo-546819.jpg";
import img9 from "../../assets/images/small/pexels-photo-5212339.png";
import img10 from "../../assets/images/small/pexels-photo-4098368.png";
import img11 from "../../assets/images/small/pexels-photo-3825527.png";
import img12 from "../../assets/images/small/pexels-photo-256381.jpg";
import img13 from "../../assets/images/small/pexels-photo-210990.jpg";
import img14 from "../../assets/images/small/pexels-photo-1108101.jpg";
import img15 from "../../assets/images/small/pexels-photo-3761508.png";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Library = () => {
  document.title = "Subject";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Application" breadcrumbItem="Library" />
          <Row>
            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Programming</h4>
                </CardBody>
                <img className="img-fluid" src={img8} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Mathematics</h4>
                </CardBody>
                <img className="img-fluid" src={img9} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Physics</h4>
                </CardBody>
                <img className="img-fluid" src={img10} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Chemistry</h4>
                </CardBody>
                <img className="img-fluid" src={img11} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Biology</h4>
                </CardBody>
                <img className="img-fluid" src={img12} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Economics</h4>
                </CardBody>
                <img className="img-fluid" src={img13} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Mechanics</h4>
                </CardBody>
                <img className="img-fluid" src={img14} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="display-5 mb-2 text-center">Architecture</h4>
                </CardBody>
                <img className="img-fluid" src={img15} alt="" />
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-primary rounded-3 text-uppercase"
                    >
                      look up
                    </Link>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Library;
