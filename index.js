const TABLE_WIDTH = 158;
const TABLE_HEIGHT = 41;
const table = document.getElementById("chaos")

let grid = new Array(TABLE_HEIGHT)
for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(TABLE_WIDTH)
}

for (let i = 0; i < grid.length; i++) {
    const row = document.createElement("tr")
    table.appendChild(row)

    for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = document.createElement("td")
        row.appendChild(grid[i][j])
	grid[i][j].innerHTML = 0
    }
}

function increment() {
    let i = Math.floor(Math.random() * TABLE_HEIGHT)
    let j = Math.floor(Math.random() * TABLE_WIDTH)
    
    grid[i][j].innerHTML++
}

for (let i = 0; i < 200; i++) {
    setInterval(increment, 1)
}

document.title = (TABLE_HEIGHT * TABLE_WIDTH).toString() + " Counters"
