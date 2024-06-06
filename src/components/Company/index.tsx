import { WORDING_COMPANY } from "./wording";

interface CompanyInterface {
  language: string;
}

const Company = ({ language }: CompanyInterface) => {
  return (
    <div className="p-2 my-5 text-center">
      <div className="text-3xl font-bold text-rose-800 text-shadow drop-shadow-lg">
        {WORDING_COMPANY[language].title}
      </div>
      <div className="mt-2 tracking-wider">{WORDING_COMPANY[language].desc[0]}</div>
      <div className="mt-2 tracking-wider">{WORDING_COMPANY[language].desc[1]}</div>
    </div>
  );
};

export default Company;
