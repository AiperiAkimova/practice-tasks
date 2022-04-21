import './Card.css'

function Card (props){
    return(
        <div className='card'>
            <div className="wallpaper" style={{backgroundColor:props.wallpaper}}></div>
            <img src={props.profilePic} alt="Foto"></img>
            <div className="user"></div>
            <h2>{props.username}</h2>
            <p>{props.id}</p>
            <span>About</span>
            <p>{props.userInfo}</p>
            <p>web <a href='http://phin.dev'>http://phin.dev</a></p>
            <p>Twitter <a href='https://twitter.com/?lang-ru'>https://twitter.com/?lang-ru</a></p>
        </div>
    )
}

export default Card