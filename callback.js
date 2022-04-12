$.ajax({
    url: `https://jsonplaceholder.typicode.com/users`,
    success: results => {
        // console.log(results)
        let tbody = ``;
        results.forEach(b => {
            tbody += `<tr>
           <td>${b.id}</td>
           <td>${b.name}</td>
           <td>${b.username}</td>
           <td>${b.email}</td>
           <td>
             ${b.address.street},
             ${b.address.suite}, 
             ${b.address.city},
             ${b.address.zipcode},
             ${b.address.geo.lat},
             ${b.address.geo.lng}
            </td>
           <td>${b.phone}</td>
           <td>${b.website}</td>
           <td>
           ${b.company.name},
           ${b.company.catchPhrase},
           ${b.company.bs}
           </td>
         </tr>`;
        });
        $(`#dataB`).html(tbody);
    },
    error: e => {
        console.log(e.responseText);
    }
});

const table = document.getElementById(`dataB`);
table.innerHTML = message(`Loading...`);
const data = fetch(`https://jsonplaceholder.typicode.com/users`)
data.catch(load => {
    table.innerHTML = message(load.message)
});

function message(msg) {
    return `<tr>
            <td class="text-center" colspan="8">${msg}</td>
        </tr>`;
};
