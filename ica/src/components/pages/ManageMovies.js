import React, {useState} from 'react';
import NavBar from "./NavBar";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { PromiseProvider } from 'mongoose';
import AddMovie from '../AddMovie';

export default function ManageMovies() {
    const table = [
        ["13223","Gran Torino"],
        ["76341","Mad Max: Fury Road"],
        ["527774","Raya and the Last Dragon"],
        ["791373", "Zack Snyder's Justice League"]
    ]

    return (
        <>
            <NavBar />

            <Tabs defaultActiveKey="Movies" id="ManageMovies">
                <Tab eventKey="Movies" title="Manage Movies">
                    <Container fluid="lg">
                        <Table striped border hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Movie ID</th>
                                    <th>Movie Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    table.map((movies,i) =>(
                                        <tr key={i}>
                                            <th>{i}</th>
                                            {
                                                movies.map((movieinfo,j) => (
                                                    <td key={j}>{movieinfo}</td>
                                                ))
                                            }
                                            <Button 
                                                variant="danger"
                                                onClick={(event) => {
                                                    console.log(movies);
                                                    event.preventDefault();
                                                    fetch('http://localhost:5000/movies/deletemovie', {
                                                      method: 'POST',
                                                      body: JSON.stringify({
                                                        movieid: movies[0]}),
                                                      headers: {'Content-Type': 'application/json'}
                                                    }).then(result => {
                                                      if(result.status === 200) {
                                                        console.log("Deleted!");
                                                      } else {
                                                        const error = new Error(result.error);
                                                        throw error;
                                                      }
                                                    }).catch(error => {
                                                      console.error(error);
                                                      console.log("Failed to deleted.");
                                                    });
                                                  }}
                                            >
                                                Remove Movie
                                            </Button>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Container>
                </Tab>
                <Tab eventKey="Add" title="Add Movie">
                    <AddMovie />
                </Tab>
            </Tabs>

        </>
    );
}
