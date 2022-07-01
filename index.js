const classSelector = document.getElementById(`class-select`)

let request = async () => {
 // initiate request to dnd server
 let req = await fetch(`https://www.dnd5eapi.co/api/classes`)
 let res = await req.json()
 console.log(`Classes`, res)
 res.results.forEach((char) => {
  console.log(`char`, char.name)
  let option = document.createElement(`option`)
  option.setAttribute(`value`, char.name)
  option.innerText = char.name
  classSelector.append(option)
 })
}


// when the page loads it will run the request function
request()