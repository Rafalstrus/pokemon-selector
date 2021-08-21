
import './pokemon-types.styles.css'

export const PokeTypes = ({poketypes}: any) => {
    return(
    <div>{
        poketypes.map((type: any) => {
            console.log(type)
            return (
                <div key={type.name}>
                    <p>{type.name}</p>
                    <img 
                    className ="types-images"
                    alt=""
                    id={type.name}
                    src={"/types-assets/"+type.name+".svg"}
                    ></img>
                </div>
            )
        }
        )
    }
    </div>
    )
}