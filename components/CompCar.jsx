import react, { useState } from 'react'

const CompCar = () => {

    const [car, setCar] = useState({
        year: 2004,
        brand: "krishna",
        Model: "Supe"
    });

    function handleYearChange(event){
        setCar(c=>({...c,year:event.target.value})) //... spread Operator ({JavScript Object in arrow Functions}) 
    }
    function handleBrandChange(event){
        setCar(c=>({...c,brand:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c,Model:event.target.value}));
    }
    return (
        <>
            <h1>
                Car Details!
            </h1>
            <p>
                Displaying :
                {/* Value from car from UseState */}
                {car.year} {car.brand} {car.Model}

                <br />
                <input type="number" value={car.year} onChange={handleYearChange} />
                <input type="text" value={car.brand} onChange={handleBrandChange} />
                <input type="text" value={car.Model} onChange={handleModelChange}/>
            </p>
        </>
    );
}

export default CompCar