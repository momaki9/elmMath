import Card from 'react-bootstrap/Card';

const Footer = function () {
    return (
        <Card style={{ width: '24rem' }} className='relative-bottom'>
            <Card.Body>
                <Card.Title>Issues/Concerns/Comments?</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Contact me!</Card.Subtitle>
                <hr/>
                <Card.Text>
                    If you found any errors or issues, or would like to suggest or comment on anything please feel free to reach out!
                </Card.Text>
                <Card.Link href="mailto:@mostafa_m9@yahoo.com">Email me</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default Footer;