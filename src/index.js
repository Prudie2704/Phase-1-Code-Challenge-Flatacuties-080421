let charcterInfo = document.getElementById("characterInfo")

characterInfo.append(character-bar)

//fetch function
fetch ("http://localhost:3000/user")
  .then(res => res.json())
  .then(json => {
    json.map(data =>{
        console.log(data)
        characterInfo.append(character-bar(data))
    })
  })
  
  //create character-bar
  function character-bar(img.name.votes) { 
    let character-bar = document.createElement(characterInfo)
    characterInfo.innerHTML =
    <div class="characterInfo">
      <div id="detailed-info">
        <p id="name">Character's Name</p>
        <img
          id="image"
          src="assets/dummy.gif"
          alt="Character's Name"
        />
        <h4>Total Votes: <span id="vote-count">Character's Votes</span></h4>
        <form id="votes-form">
          <input type="text" placeholder="Enter Votes" id="votes" name="votes" />
          <input type="submit" value="Add Votes" />
        </form>
        <button id="reset-btn">Reset Votes</button>
      </div>
  }