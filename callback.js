getData();

function getData(callback){
    const table = document.getElementById(`dataB`);
    table.innerHTML = message(`Loading...`);
    const data = fetch(`https://jsonplaceholder.typicode.com/users`)
    data
        .then(response => response.json())
        .then(response => {
            table.innerHTML = dataBody(response);
        })
        .catch(err => {
            table.innerHTML = message(err.message)
        })
        .finally(() => {});

    callback(data)
}
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
