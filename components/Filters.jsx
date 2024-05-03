import LocationFilter from "./filters/LocationsFilter.jsx";

const Filters = () => {
    return (
        <section className="filter">
            <div className="container">
                <div className="filters-wrapper">
                    <LocationFilter />
                </div>
            </div>
        </section>
    );
};

export default Filters;
