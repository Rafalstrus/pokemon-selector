
import './color-changer.styles.css';

export const ColorChangerButton = props => (
    <div id="color-change-button">
        <button onClick={() => {
            console.log(Math.floor(Math.random() * (255 - 0 + 1)) + 0)
        }}></button>
    </div>
)