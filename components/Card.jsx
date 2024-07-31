import ProfilePic from "../assets/profile.jpg";

function Card(){

    return(
        <div className="card">
            <img src={ProfilePic
                
            } alt="Krishna-Profile-Pic" />
            <h1>
                Krishna
            </h1>
            <p>
                Computer Science Engineering & Aspiring Software Developer!
            </p>
        </div>
    );

}

export default Card