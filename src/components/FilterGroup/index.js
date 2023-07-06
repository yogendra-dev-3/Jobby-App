import ProfileDetails from '../ProfileDetails'
import './index.css'

const FilterGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    changeSearchInput,
    getFilteredProducts,
  } = props

  const onChangeInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterKeyPressed = event => {
    getFilteredProducts(event.key)
  }

  const renderTypesOfEmployment = () => {
    const onClickJob = () => {}
    return (
      <div className="types-employment-card">
        <input
          type="search"
          className="search"
          placeholder="Search"
          onChange={onChangeInput}
          onKeyDown={onEnterKeyPressed}
        />
        <h1 className="employment-type-heading">Type of Employment </h1>
        <ul className="employment-type-container">
          {employmentTypesList.map(employee => {
            const {changeEmployeeList} = props

            const onSelectEmploymentType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="item"
                key={employee.employmentTypeId}
                onChange={onSelectEmploymentType}
              >
                <input
                  type="checkbox"
                  className="checkbox-salary"
                  id={employee.employmentTypeId}
                  value={employee.employmentTypeId}
                />
                <label htmlFor={employee.employmentTypeId} className="label">
                  {employee.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRangeList = () => {
    const onCLickJob = () => {}
    return (
      <div className="types-employment-card">
        <h1 className="employment-type-heading">Salary Range</h1>
        <ul className="employment-type-container">
          {salaryRangesList.map(salary => {
            const {changeSalary} = props
            const OnChangeSalary = () => {
              changeSalary(salary.salaryRangeId)
            }

            return (
              <li
                className="item"
                key={salary.salaryRangeId}
                onClick={OnChangeSalary}
              >
                <input
                  type="radio"
                  name="salary"
                  className="checkbox"
                  htmlFor={salary.label}
                />
                <label id={salary.label} className="label">
                  {salary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <ProfileDetails />
      {renderTypesOfEmployment()}
      {renderSalaryRangeList()}
    </div>
  )
}

export default FilterGroup
