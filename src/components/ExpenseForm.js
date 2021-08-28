import React, {useState} from "react";
import "./ExpenseForm.css";
function ExpenseForm(props){

	/*const [userInput,setUserInput] = useState({
		enteredTitle : '',
		enteredAmount : '',
		enteredDate : ''
	})*/



	const [titleChange, setTitleChange] = useState('');
	const [amountChange,setAmountChange] = useState('');
	const [dateChange,setDateChange] = useState('');
	
	function titleChangeHandler(event){
		
		//console.log(event.target.value);
		setTitleChange(event.target.value)
		/*setUserInput({
			...userInput,
			enteredTitle : event.target.value
		})*/

		/*setUserInput(function(prevInput){
			return {...prevInput,enteredTitle : event.target.value}
		});*/
	}

	function amountChangeHandler(event){
		//console.log(event.target.value);
		setAmountChange(event.target.value)
		/*setUserInput({
			...userInput,
			enteredAmount : event.target.value
		})*/
	}

	function dateChangeHandler(event){
		//console.log(event.target.value);
		setDateChange(event.target.value)
		/*setUserInput({
			...userInput,
			enteredDate : event.target.value
		})*/
	}

	function submitHandler(event){
		event.preventDefault();

		const expenseDate = {
			title:titleChange,
			amount:+amountChange,
			date:new Date(dateChange)
		}
		props.onSaveExpenseData(expenseDate);
		//console.log(expenseDate)
		setTitleChange("");
		setAmountChange("");
		setDateChange("");
		setClicked(false)
	}

	const [clicked, setClicked] = useState(false);

	

	function val(){
		var i = 0;
		console.log(i);	}

	function expenseHandler(){
		setClicked(!clicked);
		setTitleChange("");
		setAmountChange("");
		setDateChange("");
		console.log("this is clicked")

		/*
		return (
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
							<input type='text' value={titleChange} onChange={titleChangeHandler} />
						
					</div>
					<div className="new-expense__control">
						<label>amount</label>
							<input type='number' value={amountChange} min="0.01" step="0.01" onChange={amountChangeHandler} />
						
					</div>
					<div className="new-expense__control">
						<label>Date</label>
							<input type='date' min="2019-01-01" value={dateChange} max="2022-12-31" onChange={dateChangeHandler}/>
						
					</div>
				</div>
				<div className = "new-expense__actions">
				<button type = "submit">Cancel</button>
				<button type = "submit">Add Expense</button>
	
				</div>
			</form>
		)*/
		
	}
	
	return (
		<div className = "new-expense__actions-centre">
				
				{!clicked && (<button onClick={expenseHandler} >Add New Expense</button>)}
				

                


				{clicked && (<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
							<input type='text' value={titleChange} onChange={titleChangeHandler} />
						
					</div>
					<div className="new-expense__control">
						<label>amount</label>
							<input type='number' value={amountChange} min="0.01" step="0.01" onChange={amountChangeHandler} />
						
					</div>
					<div className="new-expense__control">
						<label>Date</label>
							<input type='date' min="2019-01-01" value={dateChange} max="2022-12-31" onChange={dateChangeHandler}/>
						
					</div>
				</div>
				<div onChange={expenseHandler} className = "new-expense__actions">
				<button onClick={expenseHandler} >Cancel</button>
				<button  type = "submit"   >Add Expense</button>
				
				
				
				
	
				</div>
			</form>
			
      )}
	
		</div>

	)


	

}

export default ExpenseForm;