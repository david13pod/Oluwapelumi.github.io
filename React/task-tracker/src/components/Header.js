import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

function Header({title, onAddBtn, showAdd}) {
    const location =useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <button className='btn'>Add</button> */}
            {location.pathname === '/' && 
            <Button color={showAdd ? 'red' : 'green'} 
            text={showAdd? 'close': 'Add'} onClick={onAddBtn}  />}
        </header> 
    )
}
Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}

// css in js
// const HeaderStyle ={
//     color:'red',
//     backgroundColor:'black'

// }
export default Header
