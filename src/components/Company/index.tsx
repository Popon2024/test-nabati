import { WORDING_COMPANY } from "./wording";

interface CompanyInterface {
  language: string;
}

const Company = ({ language }: CompanyInterface) => {
  return (
    <div className="p-2 mt-2">
      <div>{WORDING_COMPANY[language].title}</div>
      <div className="mt-2">{WORDING_COMPANY[language].desc[0]}</div>
      <div className="mt-2">{WORDING_COMPANY[language].desc[1]}</div>
    </div>
  );
};

export default Company;
