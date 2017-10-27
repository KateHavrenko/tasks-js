var persons = [        
                {
                    name: 'Kate', 
                    age: 25,
                    group: 1,
                },
                {
                    name: 'Max', 
                    age: 36,
                    group: 2,
                },
                {
                    name: 'Ann', 
                    age: 15,
                    group: 3,
                }
            ]

persons.sort(function(a, b){
    if (a.name > b.name) {
        return 1;
    }

    if (a.name < b.name) {
        return -1;
    }
    return 0;
});


 
function createTable(){
        var table = document.createElement('table');

        table.setAttribute('border', '1');

        table.setAttribute('color', '000');

        table.setAttribute('width','500');

        var tbody = document.createElement('tbody');

        var tr = document.createElement('tr');

        tr.innerHTML = '<td>Имя</td><td>Возраст</td><td>Группа</td>';

        tbody.appendChild(tr);
    
        

        for(var i = 0; i < persons.length; i++){

            var tr = document.createElement('tr');
            var nameItem = persons[i].name;
            var ageItem = persons[i].age;
            var groupItem = persons[i].group;
            var items = [nameItem, ageItem, groupItem];

                for (var j = 0; j < items.length; j++) {                

                    var td = document.createElement('td');

                    var item = items[j];

                    td.innerHTML = item;

                    tr.appendChild(td);

                }

                tbody.appendChild(tr);

        }

        table.appendChild(tbody);

        document.getElementById('persons-table').appendChild(table);
}
createTable();

