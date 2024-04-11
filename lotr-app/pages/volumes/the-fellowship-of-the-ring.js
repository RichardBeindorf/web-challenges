import Link from "next/link";
import { volumes } from "../../resources/lib/data";

export default function ThefellowShip(){
    return <>
        <Link href="/volumes">Back to Overview</Link>
        {volumes.map(({slug}) => slug === "the-fellowship-of-the-ring")}
        <h1></h1>
        <p></p>
        <ul>
            <li></li>
            <li></li>
        </ul>
        
    </>
}