// props read only components that are shared parent to child in key:values pair
//PropsTypes- ensuring passed value is correct datatype age:propTYpe:number
//defaultprops
import propTypes from 'prop-types';

function Student(props) {
  const style = {
    color: "Black",
    fontSize: "16px",
    border: "1px solid",
  };
  return (
    <div style={style}>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

Student.defaultProps={
    name:"default",
    age:20,
    isStudent:true,
}
export default Student;
