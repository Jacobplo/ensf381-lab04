let userGrid = document.getElementById("userGrid")
let viewToggleBtn = document.getElementById("viewToggleBtn")
let deleteIdInput = document.getElementById("deleteIdInput")
let deleteBtn = document.getElementById("deleteBtn")
let sortByGroupBtn = document.getElementById("sortByGroupBtn")
let sortByIdBtn = document.getElementById("sortByIdBtn")

function render(users) {
  if (users.length == 0) {
    userGrid.text
  }

  for (let user of users) {
    let element = document.createElement("article")
    element.class = "user-card"
    element.innerHTML = `
        <h3>${user.first_name ?? ""}</h3> 
        <p>first_name: ${user.first_name ?? ""}</p> 
        <p>user_group: ${user.user_group ?? ""}</p> 
        <p>id: ${user.id ?? ""}</p> 
    `
    userGrid.appendChild(element)
  }
}

async function retrieveData() {
  const response = await fetch("https://69a1db862e82ee536fa26290.mockapi.io/users_api")
  const users = await response.json()
  console.log(users)
  render(users)
}
retrieveData()

viewToggleBtn.addEventListener('click', () => {
  if (userGrid.classList.contains('grid-view')) {
    userGrid.classList.replace('grid-view', 'list-view')
  }
  else if (userGrid.classList.contains('list-view')) {
    userGrid.classList.replace('list-view', 'grid-view')
  }
})

sortByGroupBtn.addEventListener('click', () => {
  
})
