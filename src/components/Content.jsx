import './Content.css'
import { goods } from './goods'
import Window from './Window'

export default function Content(){
    return (
        <div id='content'>
            <div id='grid'>
                {goods.map(good=>(
                    <Window {...good}></Window>
                ))}
            </div>
        </div>
    )
}