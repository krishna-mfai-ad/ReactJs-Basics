import { useState } from "react";

function OnChange(props) {

    const { title } = props;
    const [head, setHead] = useState("")
    const [name, setName] = useState("");
    const [qty, setQty] = useState();
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("Cash")
    const [shipping, setShipping] = useState("")

    const handleChangeQty = (e) => {
        setQty(e.target.value);
    }
    const changehead = () => {
        setHead(title)
    }

    function handleComment(e) {
        setComment(e.target.value)
    }
    function handlePayment(e) {
        setPayment(e.target.value);
    }
    function handleshipping(e) {
        setShipping(e.target.value);
    }
    return (
        <>
            <div className="on-change-div">
                <h1 onMouseEnter={changehead}>
                    Heading <br />
                    {head}
                </h1>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <h1>
                    Name: {name}
                </h1>
                <input type="number" value={qty} onChange={handleChangeQty} />
                <h3>
                    Quantity:{qty}
                </h3>
                <textarea value={comment} onChange={handleComment} placeholder="Enter Instructions.." id="" />
                <p>
                    Comments: {comment}
                </p>
                <select name="Payment" value={payment} onChange={handlePayment} id="">
                    <option value="">
                        Select Any Option
                    </option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Card</option>
                    <option value="COD">COD</option>
                </select>
                <h2>
                    Paymenth Method: {payment}
                </h2>
                <div className="radio-btns">
                    <label htmlFor="pickup">
                        <input type="radio" value="pickUp" 
                                            checked={shipping === "pickUp"} 
                                            onChange={handleshipping} />
                        pickup
                    </label>
                    <br />
                    <label htmlFor="delivery">
                        <input type="radio" value="Delivery" 
                                            checked={shipping === "Delivery"} 
                                            onChange={handleshipping} />
                        Delivery
                    </label>
                    <br />

                    <p>
                        Shipping:{shipping}
                    </p>
                </div>
            </div>
        </>
    );
}

export default OnChange