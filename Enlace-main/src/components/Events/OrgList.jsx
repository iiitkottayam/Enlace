const Orglist = ({ org1, org1det, ph1, org2, org2det, ph2 }) => {
  return (
    <div className="font-montserrat w-full flex-col flex md:flex-row py-10 pl-3 md:px-9 lg:space-x-12">
      <div className="w-full h-full py-5">
        <p className="text-white font-semibold text-base md:text-lg xl:text-3xl">
          {org1}
        </p>
        <p className="text-white font-regular text-xs md:text-sm xl:text-2xl">
          {org1det}
        </p>
        <p className="text-white font-regular text-xs md:text-sm xl:text-2xl">
          {ph1}
        </p>
      </div>
      <div className="w-full h-full py-5">
        <p className="text-white font-semibold text-base md:text-lg xl:text-3xl">
          {org2}
        </p>
        <p className="text-white font-regular text-xs md:text-sm xl:text-2xl">
          {org2det}
        </p>
        <p className="text-white font-regular text-xs md:text-sm xl:text-2xl">
          {ph2}
        </p>
      </div>
    </div>
  );
};

Orglist.defaultProps = {
  org1: "orgniner 1",
  org1det: "lorem ipsum",
  ph: "544655465213",
  org2: "orgniner 2",
  org2det: "lorem ipsum",
  ph: "544655465213",
};

export default Orglist;
