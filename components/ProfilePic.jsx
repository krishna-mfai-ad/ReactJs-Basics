import profile from './assets/profile.jpg'

function ProfilePic(){
    const image=profile;

    const handleClick=(e)=> e.target.style.display="none"
    return(
        <div>
            <img onClick={(e)=>handleClick(e)} src={image} height="250px" alt="" />
        </div>
    );
}

export default ProfilePic