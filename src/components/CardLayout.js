import './CardLayout.css'

function CardLayout(props){

    return(
        <div className="wrapper">{props.children}</div>
    )
}

export default CardLayout