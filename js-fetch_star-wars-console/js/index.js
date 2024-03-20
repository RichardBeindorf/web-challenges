console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    // const dataLength = data.array.length;
    // console.log(dataLength);
    
    console.log(data.results[2].eye_color);
    return data;
}

fetchData();