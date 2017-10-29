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



 
function createTable(){
        var table = document.createElement('table');

        table.setAttribute('border', '1');

        table.setAttribute('color', '000');

        table.setAttribute('width','500');

        var tbody = document.createElement('tbody');

        var tr = document.createElement('tr');

        tr.innerHTML = "<td col='name'>Имя</td><td col='age'>Возраст</td><td col='group'>Группа</td>";

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
        
        var tableItems = document.querySelectorAll('table tbody tr:first-child td');

        for (var j = 0; j< tableItems.length; j++) {
            wrapper(j);
        }
}
createTable();

var tableItems = document.querySelectorAll('table tbody tr:first-child td');

function wrapper(i){
    var tableItems = document.querySelectorAll('table tbody tr:first-child td');

 // for (i = 0; i < tableItems.length; i++) {
    var firstClick = function(e) {

        console.log(i);
        
        function makeComparator(x){
            var sortEl = function(a, b){
                if (a[x] > b[x]) {
                    return 1;
                }

                if (a[x] < b[x]) {
                    return -1;
                }
                return 0;

            }
            
            return sortEl;
        }


        persons.sort(makeComparator(e.target.getAttribute('col')));

        document.querySelector('table').parentNode.removeChild(document.querySelector('table'));


        createTable();

        var tableItems = document.querySelectorAll('table tbody tr:first-child td');


        tableItems[i].onclick = secondClick;

    }

     var secondClick = function(e) {

        console.log(i);

        

        function makeComparator(x){
            var sortEl = function(a, b){
                if (a[x] < b[x]) {
                    return 1;
                }

                if (a[x] > b[x]) {
                    return -1;
                }
                return 0;

            }
            
            return sortEl;
        }


        persons.sort(makeComparator(e.target.getAttribute('col')));

        document.querySelector('table').parentNode.removeChild(document.querySelector('table'));


        createTable();

        var tableItems = document.querySelectorAll('table tbody tr:first-child td');


        tableItems[i].onclick = firstClick;
    }   

    tableItems[i].onclick = firstClick;

}

var tableItems = document.querySelectorAll('table tbody tr:first-child td');

for (var j = 0; j< tableItems.length; j++) {
    wrapper(j);
}

    
//}

