import AppIcon from "./AppIcon";

type AppIconType = {
    nameLogo: string
    width?:string
    height?:string
}
export default function Icons (props:AppIconType) {
    return (
        <AppIcon idIcon={props.nameLogo} width={props.width} height={props.height}/>
    )
}
