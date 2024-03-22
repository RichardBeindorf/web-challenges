clear.Console();

async function numberOfPeopleInSpace(){
    const response = await fetch('http://api.open-notify.org/astros.json')
    const data = await response.json();
    return data;
}
console.log(data);