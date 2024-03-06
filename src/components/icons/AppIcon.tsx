import iconsSprite from "../../assets/images/icons-sprite.svg"

type AppIconPropsType = {
    idIcon:string
    width?:string
    height?:string
}

export default function AppIcon(props:AppIconPropsType){
    return(
        <svg
            width={props.width || "79"} height={props.height || "32" }
            viewBox={ `0 0 ${props.width} ${props.height}` ||"0 0 79 32"}
            fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={ `${iconsSprite}#${props.idIcon}`}/>
        </svg>
    )
}
