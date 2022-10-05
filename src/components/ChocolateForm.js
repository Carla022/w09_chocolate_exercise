import { useState } from "react";

const ChocolateForm = ({estates, onSubmit}) => {

    const [newChocolate, setNewChocolate] = useState(
        {
            name: "",
            cocoaPercentage: 0,
            estate: null
        }
    );

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const updatedNewChocolate = {...newChocolate}; //... = spread operator makes a copy of the array
        // use square bracket [] to access keys in an object
        updatedNewChocolate[propertyName] = event.target.value; 
        setNewChocolate(updatedNewChocolate);
    }
    
    const estateOptions = estates.map((estate) => {
        return <option key={estate.id} value={estate.id}>{estate.name}</option>
    })

    const handleEstate = (event) => {
        const estateId = parseInt(event.target.value);
        const selectedEstate = estates.find(estate => estate.id === estateId);
        const updatedNewChocolate = {...newChocolate};
        updatedNewChocolate.estate = selectedEstate;
        setNewChocolate(updatedNewChocolate);

    }

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        onSubmit(newChocolate);
        setNewChocolate({
            name:"",
            cocoaPercentage: 0,
            estate: null
        })
    }

    return (
        <>
            <h3>Add a new chocolate</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="chocolate name"
                    onChange={handleChange}
                    value={newChocolate.name}
                />

                <label htmlFor="cocoaPercentage">Cocoa Percentage:</label>
                <input
                    id="cocoaPercentage" 
                    type="text"
                    name="cocoaPercentage"
                    placeholder="cocoa percentage"
                    onChange={handleChange}
                    value={newChocolate.cocoaPercentage}
                />

                <label htmlFor="estate">Estate:</label>

                {/* select creates a dropdown */}
                
                <select 
                    id="estate" 
                    defaultValue="select-estate"
                    name="estate"
                    onChange={handleEstate}
                >        
                    <option value="select-estate" disabled>Choose an Estate</option>
                    {estateOptions}
                </select>

                <input type="submit" value="Add Chocolate"/>
            </form>
        </>

    )
}

export default ChocolateForm;