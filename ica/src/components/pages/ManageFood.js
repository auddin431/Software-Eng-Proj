import React, {useState, useEffect} from 'react';
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

    const [food, setFood] = useState([]);
    useEffect(() => {
    fetch("http://localhost:5000/ManageFood/addFood", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        if (result.status == 200) {
          result.json().then((res) => {
            setFood(res.data);
          });
        } else {
          const error = new Error(result.error);
          throw error;
        }
      })
      .catch((error) => {
        console.error(error);
        console.log("Failed");
      });
  }, []);

  const delFood = (foods) => {
    
    const postDatabase = async (food) => {
      
      fetch('http://localhost:5000/ManageFood/delFood', {
        method: 'POST',
        body: JSON.stringify({food}),
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
        console.log("Failed to delete.");
      });
    
    }
    postDatabase(foods)
  };


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
                                    food && food.map((foods,i) =>(
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{foods.food}</td>
                                            <td>{foods.price}</td>
                                            <td>{foods.count}</td>
                                            <Button onClick={() => delFood(foods)} href="/ManageFood">
                                                Remove Food
                                            </Button>
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
