import CompanyFilter from "./filters/CompanyFilter.jsx";
import ExperienceFilter from "./filters/ExperienceFilter.jsx";
import LocationFilter from "./filters/LocationsFilter.jsx";
import OfficeModalFilter from "./filters/OfficeModalFilter.jsx";
import PayFilter from "./filters/PayFilter.jsx";
import RoleFilter from "./filters/RoleFilter.jsx";

const Filters = () => {
    return (
        <section className="filter">
            <div className="container">
                <div className="filters-wrapper">
                    <LocationFilter />
                    <ExperienceFilter />
                    <CompanyFilter />
                    <OfficeModalFilter />
                    <RoleFilter />
                    {/* </div>
                <div className="filters-wrapper"> */}
                    <PayFilter />
                </div>
            </div>
        </section>
    );
};

export default Filters;
