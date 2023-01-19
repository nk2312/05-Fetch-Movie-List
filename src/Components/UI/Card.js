import App from "../../index.css"

const Card=(props)=>{
    return <div className={'card '+props.customCardClass}>{props.children}</div>
}

export default Card;