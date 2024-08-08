import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            heading="For Renters"
            details="Find your dream rental property. Bookmark properties and contact owners."
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          />
          <InfoBox
            className="bg-orange-100 p-6 rounded-lg shadow-md"
            heading="For Property Owners"
            details=" List your properties and reach potential tenants. Rent as an
              airbnb or long term."
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-orange-500",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
