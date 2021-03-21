import PropType from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd, showAddTask}) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onAdd={onAdd} color={showAddTask?'Red':'Purple'} text={showAddTask?'Close':'Add'} />
      
    </header>
  );
};


//IF NO VALUE IS PASSED FROM THE PROPS 
Header.defaultProps = {
  title: "File Tracker",
};


//IF YOU REQUIRE A SPECIFIC TYPE 
//FOR THE PROPS YOU WANT TO RECEIVE
Header.propTypes = {
    title: PropType.string,
}

//CSS IN JS
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'grey'
// }

export default Header;