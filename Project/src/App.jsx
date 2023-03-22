import { useState } from "react";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const [page, setPage] = useState("LandingPage");
  const [values, setValues] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [filterList, setFilterList] = useState([]);

  return (
    <div className="App">
      {page === "LandingPage" ? (
        <LandingPage setPage={setPage} />
      ) : (
        <Dashboard
          setPage={setPage}
          setValues={setValues}
          values={values}
          filterList={filterList}
          isFilter={isFilter}
          setFilterList={setFilterList}
          setIsFilter={setIsFilter}
        />
      )}
    </div>
  );
}

export default App;
