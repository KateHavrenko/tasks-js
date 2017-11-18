var my_news = [        
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
            ];


var TableRows = React.createClass({
  render: function() {
  	var name = this.props.data.name,
        age = this.props.data.age,
        group = this.props.data.group;
      return (
            <tr className="rows">
              <td className="row__name">{name}</td>
              <td className="row__age">{age}</td>
 			  <td className="row__group">{group}</td>
 			</tr>
      )
    }
});

var Table = React.createClass({
	getInitialState: function() {
	    return {
	      initial: this.props.my_news,
	      current: this.props.my_news,
	      sortColumn: '',
	      direction: 'asc'
	    };
	  },
	clickSort: function (newField, currentField, currentOrder){  
		var newOrder = 'asc';
		if (currentField == newField && currentOrder == 'asc'){
			newOrder = 'desc';
		}

	    var sortEl = function(a, b){
	        var comparison = 0;
	        if (a[newField] > b[newField]) {
	          comparison = 1;
	        } else if (a[newField] < b[newField]) {
	          comparison = -1;
	        }
	        return (
	              (newOrder == 'desc') ? 
	              (comparison * -1) : comparison
	            );
	    	}
	    var data = this.state.initial;
	    data.sort(sortEl);
	    this.setState({current: data, sortColumn: newField, direction: newOrder});
	    
	},
	render: function(){
		var data = this.state.current;
		var tableTemplate;
		var nameSortOrder = 'asc';
		if (this.state.sortColumn == 'name' && this.state.direction == 'asc') {
		    nameSortOrder = 'desc';
		}
		tableTemplate = data.map(function(item, index){
			
		    return (
		   	  <TableRows key={index} data={item} />
		   	)

		})

		return (
		      <table className="table">
		      	<tbody>
		      		<tr>
		      		  <td col='name' onClick={() => this.clickSort('name', this.state.sortColumn, this.state.direction)}>Имя</td>
		      		  <td col='age' onClick={() => this.clickSort('age', this.state.sortColumn, this.state.direction)}>Возраст</td>
		      		  <td col='group' onClick={() => this.clickSort('group', this.state.sortColumn, this.state.direction)}>Группа</td>
					</tr>
		        {tableTemplate}
		        </tbody>
		      </table>
		    );
	}
})

var FilteredList = React.createClass({
  filterList: function(event){
  	this.filterList2(event.target.value);
  },
  filterList2: function(valueInput){ 	
    var updatedList = this.state.initial.filter(function(item){
      return item.name.toLowerCase().search(
        valueInput.toLowerCase()) !== -1;
    });
    console.log(updatedList);
    this.setState({current: updatedList});
  },
  getInitialState: function(){
     return {
       initial: this.props.data
     }
  },
  componentWillMount: function(){
    this.filterList2('');
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      	 <Table my_news={this.state.current} />
      	 {this.state.current.length}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
		<FilteredList data={my_news}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
