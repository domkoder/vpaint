import PropTypes from 'prop-types';

//  const onClick =({onSelectColor}) =>{
//    console.log('clicked');
//  }

function ColorButton({color, onSelectColor}) {
  return (
    <span onClick={()=>onSelectColor(color)}  style={{backgroundColor: color}} className="palette__color palette__color--1"></span>
  )
}

ColorButton.propTypes = {
  color: PropTypes.string,
}

export default ColorButton
