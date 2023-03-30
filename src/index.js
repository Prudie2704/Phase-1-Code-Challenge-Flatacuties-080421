function showNames(animals){
  let main = document.querySelector("main")
  animals.forEach(characters => {
      let li = document.createElement("li")
      li.innerHTML = `
      <p id="name">${characters.name}</p>
      <img src="${characters.image}">
      <button id="${reset-btn}">Reset Votes</button>
      <h2 id="header${characters.id}"></h3>
      `
      main.appendChild(li)
      let btn = li.querySelector("button")
      btn.addEventListener('click' , vote)
      function vote(){
          if (characters.id === 1) {
             let initial = 1 + characters.votes ++
             let tally = document.querySelector('#header1')
             tally.textContent = `${initial} votes`
          } else if (characters.id === 2) {
             let initial = 1 + characters.votes ++
             let tally = document.querySelector('#header2')
             tally.textContent = `${initial} votes`
          } else if (characters.id === 3) {
             let initial = 1 + characters.votes ++
             let tally = document.querySelector('#header3')
             tally.textContent = `${initial} votes`
          } else if (characters.id === 4) {
             let initial = 1 + characters.votes ++
             let tally = document.querySelector('#header4')
             tally.textContent = `${initial} votes`
          } else if (characters.id === 5) {
             let initial = 1 + characters.votes ++
             let tally = document.querySelector('#header5')
             tally.textContent = `${initial} votes`
          }
        }
      })
}

function fetchAnimalsNames(){
  fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => showNames(data))
}


function initialize(){
  fetchAnimalsNames()
}

initialize()
