import React, {useState} from 'react';
import NavBar from "./NavBar";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { PromiseProvider } from 'mongoose';
import AddFood from '../AddFood';

export default function ManageFood() {
    //const ids = ["13223", "76341", "527774", "791373", "299534", "157336", "402900", "359724", "155", "7446", "330459", "339403", "168259", "389165", "106646"];
    const table = [
        ["Hot Dog","$4.99","200"],
        ["BLT Sandwich","$5.99","2"],
        ["Water","$2.50","100"],
        ["Coke", "$2.50","100"]
    ]


    return (
        <>
            <NavBar />
            <Tabs defaultActiveKey="Food" id="ManageFood">
                <Tab eventKey="Food" title="Manage Food">
                    <Container fluid="lg">
                        <Table striped border hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Food</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    table.map((food,i) =>(
                                        <tr key={i}>
                                            <th>{i}</th>
                                            {
                                                food.map((foodinfo,j) => (
                                                    <td key={j}>{foodinfo}</td>
                                                ))
                                            }
                                            <Button variant="danger">Remove Food</Button>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Container>
                </Tab>
                <Tab eventKey="Add" title="Add Food">
                    <AddFood />
                </Tab>
            </Tabs>

        </>
    );
}
