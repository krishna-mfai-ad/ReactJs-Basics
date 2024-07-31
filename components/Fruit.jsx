import propType from 'prop-types';

function Fruit(props) {
    

    //fruit.sort((a,b)=> a.name.localeCompare(b.name))        Alphabetical Order
    //fruit.sort((a,b)=> b.name.localeCompare(a.name))        Reverse Alphabetical Order
    //fruit.sort((a,b)=>a.mark-b.mark);                       Numerical Order
    //fruit.sort((a,b)=>b.mark-a.mark);                       Reverse Numerical Order
    
    // const lowMark = fruit.filter(e => e.mark < 50)
    // //console.log(lowMark);
    // const lowMarkFruits = lowMark.map(fruit => <li key={fruit.name}>
    //                                                 {fruit.name}: 
    //                                                 <b>{fruit.mark}</b>
    //                                             </li>);
                                    
    // const highMark= fruit.filter(e=> e.mark>50)

    // const highMarkList=highMark.map(e=>
    //         <li key={e.mark}>
    //             {e.name}:{e.mark}
    //         </li>
    // );

    // const fruitItems = fruit.map(fruit =>
    //     <li key={fruit.name}>
    //         {fruit.name}: <b>
    //             {fruit.mark}</b></li>
    // )
    const category=props.cat;
    const itemList=props.items;

    const fruitItems=itemList.map(i=>
        <li key={i.name}>{i.name}:{i.mark}</li>
    )

    return (
        <>
            <h3>
                {category}
            </h3>
            <ul>
                {fruitItems}
            </ul>
        </>
    );
}
Fruit.propType={
    cat:propType.string,
    items:propType.arrayOf(propType.shape({
        name:propType.string,
        mark:propType.number,
    }))

}
Fruit.defaultProps={
    items:[],
    cat:"Category",
}

export default Fruit


{/* const stud = [{ name: "krishna", mark: 10 },
    { name: "kishore", mark: 20 },
    { name: "johann", mark: 30 },
    { name: "Somu", mark: 40 },
    { name: "Gowsi", mark: 50 },
    { name: "Preethi", mark: 60 },
    { name: "Keerthi", mark: 70 },
    { name: "Gouri", mark: 80 }];

    const stud2 = [{ name: "krishna", mark: 10 },
      { name: "Preethi", mark: 60 },
      { name: "Keerthi", mark: 70 },
  ];
  return (
    <div className="App">
     <Fruit items={stud} cat="Fruits"/>
     <Fruit items={stud2} cat="Students"/>  
    </div>); */}