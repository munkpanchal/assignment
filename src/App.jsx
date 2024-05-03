import Filters from "../components/Filters.jsx";
import JobCards from "../components/JobCards.jsx";

function App() {
    return (
        <>
            <main className="main-wrapper">
                <Filters />
                <JobCards />
            </main>
        </>
    );
}

export default App;
