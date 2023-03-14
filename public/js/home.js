const dropDown = document.getElementById('dropdown')
 
//sortby = [what's being sorted]
//order = asc or desc
dropDown.onchange = function() {
    // grab the search query, parse it into a `URLSearchParams` set
const queryData = new URLSearchParam(window.location.search.slice(1))

// manipulate the parameters as desired
queryData.set("sortBy", dropDown.value) //price high to low
//queryData.set("order", dropDown.value)

// assemble the new URL using the current URL as the base
const newUrl = new URL(window.location.href)
newUrl.search = queryData

// redirect to the new URL
window.location.href = newUrl
}