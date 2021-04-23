import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function AddFood(props) {

    const [food, setFood] = useState('');
    const [price, setPrice] = useState('');
    const [count,setCount]=useState('');
    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/ManageFood', {
          method: 'POST',
          body: JSON.stringify({
            food:food,
            price:price,
            count:count}),
          headers: {'Content-Type': 'application/json'}
        }).then(result => {
          if(result.status === 200) {
            console.log("Added!");
          } else {
            const error = new Error(result.error);
            throw error;
          }
        }).catch(error => {
          console.error(error);
          console.log("Failed to add.");
        });
      }

      return (
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        food
                    </Form.Label>
                    <Form.Control
                        required
                        className="mb-1"
                        id="inlineFormInput"
                        placeholder="Food"
                        onInput={e=>setFood(e.target.value)}
                        value={food}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        price
                    </Form.Label>
                    <Form.Control
                        required
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Price"
                        onInput={e=>setPrice(e.target.value)}
                        value={price}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        count
                    </Form.Label>
                    <Form.Control
                        required
                        className="mb-1"
                        id="inlineFormInput"
                        placeholder="Count"
                        onInput={e=>setCount(e.target.value)}
                        value={count}
                    />
                </Col>
                <Col xs="auto">
                    <Button 
                        type="submit" 
                        className="mb-2"
                        onClick={handleSubmit }
                    >
                        Add Food
                    </Button>
                </Col>
            </Form.Row>
        </Form>
      );

    
}
