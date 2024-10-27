import React from "react";
import { useCompanyList } from "../hooks/useCompanyList";
import "./MainPage.css";

export default function MainPage(): JSX.Element {
  const {
    companies,
    deleteCompaniesArray,
    isSelectAllChecked,
    handleCheckboxClick,
    handleSelectAllToggle,
    handleDeleteCompanies,
    handleInputChange,
    handleAddCompany,
  } = useCompanyList();

  return (
    <div className="table-container">
      <table className="company-table">
        <thead>
          <tr>
            <th colSpan={3}>
              <div className="table-header">
                <input
                  type="checkbox"
                  onChange={handleSelectAllToggle}
                  checked={isSelectAllChecked}
                  className="select-all-checkbox"
                />
                <p>Выделить всё</p>
                <button
                  className="delete-button"
                  onClick={handleDeleteCompanies}
                >
                  Удалить строки
                </button>
                <button className="add-button" onClick={handleAddCompany}>
                  Добавить строку
                </button>
              </div>
            </th>
          </tr>
          <tr className="column-titles">
            <th>Чекбокс</th>
            <th>Название</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies?.map((company) => (
            <tr
              key={company.id}
              className={`company-row ${
                deleteCompaniesArray.includes(company.id) ? "selected-row" : ""
              }`}
            >
              {Object.keys(company).map((attr) =>
                attr === "checked" ? (
                  <td key={`${company.id}-${attr}`} className="cell-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxClick(company.id)}
                      checked={deleteCompaniesArray.includes(company.id)}
                    />
                  </td>
                ) : (
                  attr !== "id" && (
                    <td key={`${company.id}-${attr}`} className="cell-input">
                      <input
                        className="company-input"
                        defaultValue={
                          company[attr as keyof typeof company] as string
                        }
                        onChange={(event) =>
                          handleInputChange(event.target.value, company, attr)
                        }
                      />
                    </td>
                  )
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
