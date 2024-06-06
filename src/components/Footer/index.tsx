const Footer = () => {
  return (
    <div className="p-3 border bg-grey-400 text-center text-slate-200">
      © {process.env.YEAR_PUBLISH || new Date().getFullYear()} Nabati, Inc. All rights reserved.
    </div>
  );
};

export default Footer;
