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

const Subject = () => {
  document.title = "Subject";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Application" breadcrumbItem="Subject" />
          <Row>
            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img8} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Programming</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S105</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G105</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img9} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Mathematics</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S101</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G101</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img10} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Physics</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S102</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G102</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img11} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Chemistry</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S103</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G103</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img12} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Biology</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S104</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G104</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img13} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Economics</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S106</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G106</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img14} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Mechanics</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S107</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G107</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card>
                <img className="card-img-top img-fluid" src={img15} alt="" />
                <CardBody>
                  <h1 className="display-6 mb-4 text-center">Architecture</h1>
                  <CardText className="text-center">
                    <p className="m-0">
                      Subject id: <span className="link-success">S108</span>
                    </p>
                    <p className="m-0">
                      Group id: <span className="link-primary">G108</span>
                    </p>
                  </CardText>

                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      outline
                      color="primary"
                      className="text-uppercase btn-rounded"
                    >
                      see grades
                    </Button>
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

export default Subject;
