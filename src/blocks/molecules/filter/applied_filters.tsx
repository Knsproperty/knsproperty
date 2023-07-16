import React from "react";

const AppliedFilters = ({
  min,
  max,
  type,
  bedrooms,
  handleUpdateParams,
}: any) => {
  // Create an array to store the applied filters
  const appliedFilters = [];

  // Add the applied filters to the array
  if (type) {
    appliedFilters.push(`Property Type: ${type}`);
  }
  if (min) {
    appliedFilters.push(`Min Price: ${min}`);
  }
  if (max) {
    appliedFilters.push(`Max Price: ${max}`);
  }
  if (bedrooms) {
    appliedFilters.push(`Beds: ${bedrooms}`);
  }
  // Add more filters if needed

  const handleRemoveFilter = (filter: string) => {
    // Split the filter string to get the filter title and value
    const [title, value] = filter.split(": ");

    // Update the corresponding state based on the filter title
    switch (title) {
      case "Property Type":
        handleUpdateParams("Property type", "Show All");
        break;
      case "Min Price":
        handleUpdateParams("Price Min", "Show All");
        break;
      case "Max Price":
        handleUpdateParams("Price Max", "Show All");
        break;
      case "Beds":
        handleUpdateParams("Beds", "Show All");
        break;
      default:
        break;
    }
  };

  return (
    <div className="mt-5 pl-5">
      <h3 className="lg:text-2xl md:text-xl text-lg text-secondary font-semibold mb-1">
        Applied Filters
      </h3>
      {appliedFilters.length > 0 ? (
        <ul className="text-sm font-light">
          {appliedFilters.map((filter, index) => (
            <li key={index}>
              {filter}{" "}
              <button onClick={() => handleRemoveFilter(filter)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm font-light">No filters applied.</p>
      )}
    </div>
  );
};

export default AppliedFilters;
