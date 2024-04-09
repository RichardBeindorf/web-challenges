import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from 'next/router'
import { volumes } from "@/lib/data";


export default function Volumes() {
  const router = useRouter()

  function getRandomElement(volumes) {
    return console.log(volumes[Math.floor(Math.random() * volumes.length)]);
  }


  return (
      <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
      {volumes.map( ({ id, slug, title }) => (
        <li key={id}>
          <Link href={`/volumes/${slug}`}>
            {title}
          </Link>
        </li>
      ))}
      </ul>
      <button onClick={getRandomElement}>Get Random Stuff</button>
      </>
  );
}
