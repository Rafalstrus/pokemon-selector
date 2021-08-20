export const PokeStats = ({pokestats}:any) => {
    return(
    <div id="poke-stats">{
        pokestats.map((stat :any) =>(
            <p key ={stat.stat.name}>{stat.stat.name +": "+stat.base_stat}</p>
        )) 
    }</div>
    )
}