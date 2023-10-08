import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Topics = function () {
    return (
        <Container>
            <ListGroup as="ol" >
                <Row>
                    <Col md={{ span: 3, offset: 0.5 }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <Badge bg="secondary" pill>
                                Addition/Subtraction
                            </Badge>
                            <a href='elmMath/AddSub'>Go there</a>
                        </ListGroup.Item>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 3, offset: 0.5 }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <Badge bg="secondary" pill>
                                Multiplication/Division
                            </Badge>
                            <a href='#'>Go there</a>
                        </ListGroup.Item>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 3, offset: 0.5 }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <Badge bg="secondary" pill>
                                Decimals
                            </Badge>
                            <a href='#'>Go there</a>
                        </ListGroup.Item>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 3, offset: 0.5 }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <Badge bg="secondary" pill>
                                Word Problems
                            </Badge>
                            <a href='#'>Go there</a>
                        </ListGroup.Item>
                    </Col>
                </Row>
            </ListGroup>
        </Container>
    )
};

export default Topics;