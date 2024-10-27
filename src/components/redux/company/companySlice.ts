import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanySliceT, CompanyT } from "../../../types/CompanyT";

const initialState: CompanySliceT = {
  companies: [],
  allStatus: false,
  deleteCompanies: [],
};

export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<CompanyT[]>) => {
      state.companies = action.payload;
    },
    addCompany: (state) => {
      state.companies = [
        ...state.companies,
        { checked: false, name: "", address: "", id: crypto.randomUUID() },
      ];
    },
    switchAllStatus: (state) => {
      state.allStatus = !state.allStatus;
      state.deleteCompanies = state.allStatus
        ? state.companies.map((el) => el.id)
        : [];
    },
    updateCompany: (state, action) => {
      state.companies = state.companies?.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    toggleCompanyForDeleting: (state, action) => {
      const isAlreadyInDeleteList = state.deleteCompanies.some(
        (companyId) => companyId === action.payload
      );

      if (isAlreadyInDeleteList) {
        state.deleteCompanies = state.deleteCompanies.filter(
          (companyId) => companyId !== action.payload
        );
      } else {
        state.deleteCompanies = [...state.deleteCompanies, action.payload];
      }
    },
    deleteCompanies: (state, action) => {
      state.companies = state.companies?.filter(
        (el) => !action.payload.includes(el.id)
      );
      state.deleteCompanies = [];
    },
  },
});

export const {
  setCompanies,
  addCompany,
  updateCompany,
  deleteCompanies,
  toggleCompanyForDeleting,
  switchAllStatus,
} = companySlice.actions;

export default companySlice.reducer;
