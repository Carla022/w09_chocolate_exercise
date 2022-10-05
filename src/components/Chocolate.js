const Chocolate = ({chocolate}) => {

    return (
        <>
            <h4>{chocolate.name}</h4>
            <p>Estate: {chocolate.estate.name}</p>
            <p>Cocoa %: {chocolate.cocoaPercentage}</p>
            <button>Delete</button>
            <button>Show</button>
            <hr />
        </>
    )


}

export default Chocolate;