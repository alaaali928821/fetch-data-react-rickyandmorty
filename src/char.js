
function Char(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <img alt={props.name} src={props.img} />
            <br/>
        </div>
    )
}

export default Char;
