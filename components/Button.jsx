function Button() {
    let count = 0;
    const countIncrement = (name) => {
        if (count < 10) {
            count++;
            console.log(`Dei ${name} Thodran, evlo vaati ${count}`);
        }
        else {
            console.log(` ${name} Stop Pannuda!`);
        }
    };

    const changeName=(e)=> e.target.textContent="After!";

    return (
        <>

            <button onClick={() => countIncrement("Krishna")}>
                Click
            </button>
            <button onDoubleClick={(e)=> changeName(e)}>
                Before
            </button>
        </>
    );

}
export default Button