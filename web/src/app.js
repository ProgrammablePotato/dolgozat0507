const doc = {
    bookusu: document.getElementById("bookusu")
}

const state = {
    url: 'http://localhost:3000/books',
}

function Get_Books() {
    fetch(state.url)
    .then( response => response.json())
    .then(result => {
        Display_Books(result)
    })
}

function Display_Books(result) {
    result.forEach(book => {
    let row = document.createElement('tr')
    row.innerHTML =
    `
    <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
    </tr>
    `
    doc.bookusu.appendChild(row)
    })
}

Get_Books()