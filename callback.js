const table = document.getElementById(`data`);
table.innerHTML = message(`Loading...`);

function getData(callback) {
    const data = fetch(`https://jsonplaceholder.typicode.com/users`)

    callback(data);
};

function showData(data) {
    data
        .then(response => response.json())
        .then(response => {
            table.innerHTML = dataBody(response)
        })
        .catch(err => {
            table.innerHTML = message(err.message)
        })
        .finally(() => {})

};

getData(showData);

function dataBody(results) {
    let tb = ``
    results.forEach(b => {
        tb += `<tr>
                    <td>${b.id}</td>
                    <td>${b.name}</td>
                    <td>${b.username}</td>
                    <td>${b.email}</td>
                    <td>
                    ${b.address.street},
                    ${b.address.suite},  
                    </td>
                    <td>${b.phone}</td>
                    <td>${b.website}</td>
                    <td>${b.company.name}</td>
                </tr>`;
    })
    return tb
};

function message(msg) {
    return `<tr>
                <td class="text-center" colspan="8">${msg}</td>
            </tr>`;
}
