import React, {useState} from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./Expenses.css";
import "./components/ExpensesList.css"
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseChart from "./components/ExpenseChart";
function Expenses(props){
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);

		

		
		
	  };
	  const filteredExpense =props.items.filter((item) => {
		  return item.date.getFullYear()==filteredYear;
		});
	  //{props.items.map(function(item){
		//return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date = {item.date}/>
	//})}
	//{console.log(filteredYear)}
	

	return (
		<div className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			
			
			
			
			{filteredExpense.length===0 && <p className="expenses-list__fallback">No record found</p>}
			<ExpenseChart expenses = {filteredExpense}/>

			{filteredExpense.map(function(filteredItem){
				//console.log(filteredItem)
				
				return (
										
				<ExpenseItem key={filteredItem.id} title={filteredItem.title} amount={filteredItem.amount} date = {filteredItem.date}/>
			
			)})}
			
		
		
		</div>
		

	)
}

export default Expenses;