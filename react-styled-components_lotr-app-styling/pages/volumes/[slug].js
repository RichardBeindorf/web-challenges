import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  const StyledText = styled.h3` 
    font-family: "Monsterrat", sans-serif; 
    font-size: 30px; 
`; 

  return (
      <StyledBackground>
        <Link href="/volumes">← All Volumes</Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}: <StyledText>{title}</StyledText>
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
        {previousVolume ? (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </div>
        ) : null}
      </StyledBackground>
  );
}

const StyledBackground = styled.div`
background-color: hotpink;
padding: 20px;
`;
