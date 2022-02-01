import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onYearChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  // thats how you filter by year
  const filteredByYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }) 
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectedYear={onYearChangeFilter}
        />
        <ExpensesChart expenses={filteredByYear}/>
        <ExpensesList items = {filteredByYear}/>
      </Card>
    </div>
  );
};

export default Expenses;
