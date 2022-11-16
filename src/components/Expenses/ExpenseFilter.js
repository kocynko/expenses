import './ExpenseFilter.css';
import Card from '../UI/Card';
const ExpenseFilter = (props) => {
  const dropDownHandler = (event) => {
    props.onFilter(event.target.value);
  };
  const selectedFilterYear = props.filterYear;
  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownHandler} value={selectedFilterYear}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpenseFilter;
