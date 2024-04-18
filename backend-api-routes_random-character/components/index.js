import useSWR from "swr"

export default function RandomCharacter(){
    const { data, isLoading } = useSWR(
        "/api/random-character"
      );
    console.log("data", data);

    if(isLoading){
        return <small>Generating awesome character…</small>
    };

    if(!data){
        return;
    }
    

    return <>
    <h1>Here's your newest creation!</h1>
    <h4>{`${data.firstName}  ${data.lastName}`}</h4>
    <p>{`${data.firstName} is a ${data.age} year old ${data["favorite Animal"]} lover.`}</p>
    </>;
}