function Food(){
    const item1="Biriyani";
    const item2="Dosa";
    const item3="Ice Cream";
    const props={name:"krishna",age:12}
    return (
        <ul>
            <li>
                {item1}
            </li>
            <li>
                {item2}
            </li>
            <li>
                {
                    item3.toLowerCase()
                }
            </li>
            <li>
                Fresh Juice {props.age}
            </li>
        </ul>
    );
}

export default Food