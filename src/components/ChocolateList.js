import Chocolate from "./Chocolate";

const ChocolateList = ({chocolates}) => {

    const chocolateComponents = chocolates.map(chocolate => {
        return <Chocolate key={chocolate.id} chocolate={chocolate}/>
    });

    return (
        <>
            <h3>Chocolate ChocolateList</h3>
            <hr />
            {chocolateComponents}
        </>
    )


}

export default ChocolateList;