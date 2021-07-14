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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Regarding:</Form.Label>
                <Form.Control type="about" placeholder="What project would you like to start?" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default ContactForm