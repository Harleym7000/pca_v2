import React from "react";
import HeaderNav from "../HeaderNav";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import HomeTextOverlay from "./HomeTextOverlay";

export default function Home() {
    return (
        <>
            <HeaderNav/>
            <Image src="/img/IMG_2739.jpg"
                   className="main-image"
                   fluid={true}
            >
            </Image>
            <HomeTextOverlay/>
            <Container fluid className="missionContainer pt-5 pb-5 text-center">
                <h1 className="text-center pb-3 missionHeader">SERVING THE PORTSTEWART COMMUNITY</h1>
                <p className="missionText text-center pb-3">Portstewart Community Association are proud organisers of the annual Red Sails Festival, a week long festival celebrating local artistic talent, with lots of activities for everyone to enjoy! The festival is rounded off with our fantastic fireworks display, with live music beforehand at the crescent bandstand.</p>
                <p className="missionText text-center pb-3">We value the community of Portstewart, helping to tackle local issues such as housing, Easter and summer car cruises and many more! Contact Us if there's something we can help with</p>
                <p className="missionText text-center">Want to help us in our mission?</p>
                <Button variant="warning" size="lg" className="mt-4 mr-3 getInvolvedButton">
                    GET INVOLVED
                </Button>
            </Container>
            <Container fluid className="causesContainer mt-5">
                <Row>
                    <h1 className="text-center mb-5">OUR CAUSES</h1>
                    <Col className="causes" sm={4}>
                            <Col sm={12} className="cause-icon d-flex justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="90" width="90" className="red-circle">
                                                    <path d="M256 16C256 9.018 260.5 2.841 267.2 .7414C273.9-1.358 281.1 1.105 285.1 6.826L509.1 326.8C512.5 331.7 512.9 338.1 510.2 343.4C507.4 348.7 501.1 352 496 352H272C263.2 352 256 344.8 256 336V16zM212.1 96.54C219.1 98.4 224 104.7 224 112V336C224 344.8 216.8 352 208 352H80C74.3 352 69.02 348.1 66.16 344C63.3 339.1 63.28 333 66.11 328.1L194.1 104.1C197.7 97.76 205.1 94.68 212.1 96.54V96.54zM5.718 404.3C2.848 394.1 10.52 384 21.12 384H554.9C565.5 384 573.2 394.1 570.3 404.3L566.3 418.7C550.7 473.9 500.4 512 443 512H132.1C75.62 512 25.27 473.9 9.747 418.7L5.718 404.3z" fill="red">
                                                    </path>
                                                </svg>
                            </Col>
                    </Col>
                    <Col className="causes" sm={4}>
                        <Col sm={12} className="cause-icon d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#ff9800"
                                 className="bi bi-trash3-fill yellow-circle" viewBox="0 0 16 16">
                                <path
                                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                        </Col>
                    </Col>
                    <Col className="causes" sm={4}>
                        <Col sm={12} className="cause-icon d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#8c239f"
                                 className="bi bi-people-fill purple-circle" viewBox="0 0 16 16">
                                <path
                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg>
                        </Col>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col sm={4}>
                        <Col sm={12} className="mt-4 cause-text">
                            <h5 className="causesHeader text-center">RED SAILS FESTIVAL</h5>
                            <h6 className="causesText text-center">A week long festival of arts in Portstewart with events for people of all ages, rounded off with our fantastic fireworks display</h6>
                        </Col>
                    </Col>
                    <Col sm={4}>
                        <Col sm={12} className="mt-4 cause-text">
                            <h5 className="causesHeader text-center">TOWN CLEAN UPS</h5>
                            <h6 className="causesText text-center">We strive to help keep our town clean and tidy. We hold town clean-ups once a month, everybody welcome!</h6>
                        </Col>
                    </Col>
                    <Col sm={4}>
                        <Col sm={12} className="mt-4 cause-text">
                            <h5 className="causesHeader text-center">COMMUNITY EVENTS</h5>
                            <h6 className="causesText text-center">We host a wide variety of events for people of all ages in our community. Why not take a look at what's on?</h6>
                        </Col>
                    </Col>
                </Row>
                {/*            <Col sm={12} className="mt-4 cause-text">*/}
                {/*                <h5 className="causesHeader text-center">RED SAILS FESTIVAL</h5>*/}
                {/*                <h6 className="causesText text-center">A week long festival of arts in Portstewart with events for people of all ages, rounded off with our fantastic fireworks display</h6>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </Col>*/}
                {/*    <Col className="causes" sm={4}>*/}
                {/*        <Row>*/}
                {/*            <Col sm={12} className="cause-icon d-flex justify-content-center">*/}
                {/*                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="white"*/}
                {/*                     className="bi bi-trash3-fill" viewBox="0 0 16 16">*/}
                {/*                    <path*/}
                {/*                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>*/}
                {/*                </svg>*/}
                {/*            </Col>*/}
                {/*            <Col sm={9}>*/}
                {/*                <h5 className="causesHeader">TOWN CLEAN UPS</h5>*/}
                {/*                <h6 className="causesText">We strive to help keep our town clean and tidy. We hold town clean-ups once a month, everybody welcome!</h6>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </Col>*/}
                {/*    <Col className="causes" sm={4}>*/}
                {/*        <Row>*/}
                {/*        <Col sm={12} className="cause-icon d-flex justify-content-center">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="white"*/}
                {/*             className="bi bi-calendar-event-fill" viewBox="0 0 16 16">*/}
                {/*            <path*/}
                {/*                d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>*/}
                {/*        </svg>*/}
                {/*        </Col>*/}
                {/*        <Col sm={9}>*/}
                {/*            <h5 className="causesHeader">COMMUNITY EVENTS</h5>*/}
                {/*                <h6 className="causesText">We host a wide variety of events for people of all ages in our community. Why not take a look at what's on?</h6>*/}
                {/*        </Col>*/}
                {/*            </Row>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </>
    )
}
