import PropType from 'prop-types'


function Button({color, text, onAdd }){


    return (
        <div>
             <button onClick={onAdd} className="btn" style={{backgroundColor:color}} >{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'Blue',
    text: 'Add in List',
}

Button.PropType = {
    text : PropType.string,
    color : PropType.string,
    onClick : PropType.func,
}

export default Button
