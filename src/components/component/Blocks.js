import '../component/Blocks.css'

function Blocks(props){
    let color;
    if (props.block === 'yellow'){
        color = "yellow"
    }
    else if(props.block === 'green'){
        color = "green"
    }
    else if(props.block === 'color'){
        color = "lime"
    }
    else if(!isNaN(props.block)){
        color = "red"
    }
    return(
        <div className='blocks'>
            <div className={color}>{props.text}</div>
        </div>

    )
}

export default Blocks