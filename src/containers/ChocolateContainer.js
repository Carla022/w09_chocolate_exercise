import ChocolateForm from "../components/ChocolateForm";
import ChocolateList from "../components/ChocolateList";
import { useState, useEffect  } from "react";

const ChocolateContainer = () => {

    const [chocolates, setChocolates] = useState ([]);
    const [estates, setEstates] = useState ([]);

    const fetchChocolateData = async () => {
        const response = await fetch("http://localhost:8080/chocolates")
        //strip out that jason data from the http 
        const data = await response.json()
        setChocolates(data);
    } 

    const fetchEstateData = async () => {
        const response = await fetch("http://localhost:8080/estates") //endpoint
        const data = await response.json();
        setEstates(data);
    }

    useEffect(() => {
        fetchChocolateData();
        fetchEstateData();
    }, []);

    const PostChocolate = async (newChocolate) => {
        const response = await fetch("http://localhost:8080/chocolates", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newChocolate) // turns it into json with a request body (the opposite)
        });
        const savedChocolate = await response.json();
        setChocolates([...chocolates, savedChocolate]);
    }

    //em inside p tag is for emphasis
    return(
        <>
            <h1>Single Origin Chocolate</h1>
            <p><em>A resource for Chocoholics</em></p> 
            <ChocolateForm estates={estates} onSubmit={PostChocolate}/>
            <ChocolateList chocolates={chocolates}/>
    
        </>
        
    );

}

export default ChocolateContainer;