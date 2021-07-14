import {Form, Button} from 'react-bootstrap';
import './Form.css';


function ContactForm(){
    return(
        <div className='formWrapper'>
        <Form className='contactForm'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Your contact information will be kept private.
                    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="aboutInfo">
              <Form.Label>Regarding:</Form.Label>
                <Form.Control className='aboutInfo' type="about" placeholder="About your project..." />
            </Form.Group>
            <div className='submitButton'>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
        </div>
    )
}

export default ContactForm