import './Window.css'
export default function Window(props){
    return(
        <div id="window">
            <div id="imagewindow">
                <img src={props.source} alt="-" height="200px" width="200px"/>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}