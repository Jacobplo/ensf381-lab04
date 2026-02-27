const user_grid = document.getElementById("userGrid")
const view_toggle_btn = document.getElementById("viewToggleButton")
const delete_id_btn = document.getElementById("deleteIdBtn")
const id_input = document.getElementById("deleteIdInput")
const sort_by_group_btn = document.getElementById("sortByGroupBtn")
const sort_by_id_btn = document.getElementById("sortByIdBtn")
const events = Object.freeze(
    SortByGrp = 1,
    SortById = 2,
    GridList = 3,
    Delete = 4
)
var user_data = []
var event;


delete_id_btn.addEventListener('click' , () => setEvent(events.SortByGrp))
sort_by_id_btn.addEventListener('click' , () => setEvent(events.Delete))
sort_by_group_btn.addEventListener('click' , () => setEvent(events.delete_id_btn))

function setEvent(event){

}
async function retrieveData(user_data) {
    try
    {
    let data = await fetch()
    let user_data = await data.json()
    console.log(user_data)
    }
    catch(e){
        console.log(e)
        user_data = [];
        console.log(user_data)

    }
    render(user_data)
}


function render(user_data){

}