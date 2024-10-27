export type CompanyT = {
  id: string;
  name: string;
  address: string;
  checked: boolean;
};

export type CompanySliceT = {
  companies: CompanyT[];
  allStatus: boolean;
  deleteCompanies: string[];
};
