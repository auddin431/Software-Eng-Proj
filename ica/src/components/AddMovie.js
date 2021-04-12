import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function AddMovie(props) {

    const [movieid, setMovieid] = useState('');
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/movies/register', {
          method: 'POST',
          body: JSON.stringify({
            movieid: movieid,
            title: title}),
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
                        movieid
                    </Form.Label>
                    <Form.Control
                        required
                        className="mb-1"
                        id="inlineFormInput"
                        placeholder="MovieID"
                        onInput={e=>setMovieid(e.target.value)}
                        value={movieid}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        title
                    </Form.Label>
                    <Form.Control
                        required
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Title"
                        onInput={e=>setTitle(e.target.value)}
                        value={title}
                    />
                </Col>
                <Col xs="auto">
                    <Button 
                        type="submit" 
                        className="mb-2"
                        onClick={handleSubmit}
                    >
                        Add Movie
                    </Button>
                </Col>
            </Form.Row>
        </Form>
      );

    
}
