import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubjectName from "../components/SubjectName";

export function Home(params) {
    return (
        <>
            <Navbar />
            <Banner />
            <Container>
                <center>
                    <h3>Choose a subject</h3>
                </center>
                <Row>
                    <Col md="6">
                        <SubjectName
                            img="https://thumbs.dreamstime.com/b/public-health-vector-illustration-society-health-control-tiny-person-concept-public-health-vector-illustration-overall-society-176909079.jpg"
                            sub_name="Public Health"
                            href="public_health"
                        />
                    </Col>
                    <Col md="6">
                        <SubjectName
                            img="https://www.news-medical.net/images/Article_Images/ImageForArticle_22028_16430272124432966.jpg"
                            sub_name="Mental Health"
                            href="mental_health"
                        />
                    </Col>
                    <Col md="6">
                        <SubjectName
                            img="http://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/online/PublishingImages/blog/health-care-economics.jpg&w=1200&h=630"
                            sub_name="Medical Care"
                            href="medical_care"
                        />
                    </Col>
                    <Col md="6">
                        <SubjectName
                            img="https://www.thechicagoschool.edu/insightadmin/2019/11/why-psychology-770x404.jpg"
                            sub_name="Psycology"
                            href="psycology"
                        />
                    </Col>
                    <center>
                        <Col md="6">
                            <SubjectName
                                img="https://www.slashfilm.com/img/gallery/the-15-best-japanese-horror-movies-of-all-time/intro-1628539252.jpg"
                                sub_name="Horror"
                                href="horror"
                            />
                        </Col>
                    </center>
                </Row>
            </Container>
            <Footer />
        </>
    )
}