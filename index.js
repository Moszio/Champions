const classSelector = document.getElementById(`class-select`)
const charImg = document.getElementById(`char-img`)
const profList = document.getElementById(`proficiencies-list`)
const baseImgUrl = `https://www.dndbeyond.com/attachments/thumbnails/0/`
const portraitMapp = {
    'barbarian': '679/400/417/c3barbarianintro.png',
    'bard': '684/400/406/c3bardintro.png',
    'cleric': '687/380/437/c3clericintro.png',
    'druid': '693/400/399/c3druidintro.png',
    'fighter':'697/400/475/c3fighterintro.png',
    'paladin': '701/400/473/c3paladinintro.png',
    'monk': '700/400/490/c3monkintro.png',
    'ranger': '707/400/444/c3rangerintro.png',
    'rogue': '709/375/480/c3rogueintro.png',
    'sorcerer':'712/400/517/c3sorcererintro.png',
    'wizard':'717/400/484/c3wizardintro.png',
    'warlock':'716/400/512/c3warlockintro.png'
}

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


  classSelector.addEventListener(`change`, async (e) => {
    document.getElementById(`selected-class`).innerText =  e.target.value
    let src = `${baseImgUrl}${portraitMapp[e.target.value.toLowerCase()]}`
    charImg.src = src
    charImg.classList.remove(`hidden`)
    req = await fetch(`https://www.dnd5eapi.co/api/classes/${e.target.value.toLowerCase()}`)
    res = await req.json()
    profList.innerHTML = ``
    res.proficiencies.forEach((prof) => {
      let li = document.createElement(`li`)
      li.innerText = prof.name
      profList.append(li)
    })
    profList.classList.remove(`hidden`)
    console.log(e.target.value)
  })
}




// when the page loads it will run the request function
request()


