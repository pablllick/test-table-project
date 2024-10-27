import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addCompany,
  deleteCompanies,
  switchAllStatus,
  toggleCompanyForDeleting,
  updateCompany,
} from "../redux/company/companySlice";
import { CompanyT } from "../../types/CompanyT";
import { debounce } from "../services/debounce";

export function useCompanyList() {
  const dispatch = useAppDispatch();
  const companies = useAppSelector((store) => store.companies.companies);
  const deleteCompaniesArray = useAppSelector(
    (store) => store.companies.deleteCompanies
  );

  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

  const handleCheckboxClick = (companyId: string): void => {
    dispatch(toggleCompanyForDeleting(companyId));
  };

  const handleSelectAllToggle = () => {
    dispatch(switchAllStatus());
    setIsSelectAllChecked((prev) => !prev);
  };

  const handleDeleteCompanies = () => {
    dispatch(deleteCompanies(deleteCompaniesArray));
    setIsSelectAllChecked(false);
  };

  const debouncedUpdateCompanyHandler = debounce(
    (company: CompanyT, attr: string, value: string) => {
      const newCompanyInfo = { ...company, [attr]: value };
      dispatch(updateCompany(newCompanyInfo));
    },
    500
  );

  const handleInputChange = (
    value: string,
    company: CompanyT,
    attr: string
  ): void => {
    debouncedUpdateCompanyHandler(company, attr, value);
  };

  const handleAddCompany = () => dispatch(addCompany());

  return {
    companies,
    deleteCompaniesArray,
    isSelectAllChecked,
    handleCheckboxClick,
    handleSelectAllToggle,
    handleDeleteCompanies,
    handleInputChange,
    handleAddCompany,
  };
}
