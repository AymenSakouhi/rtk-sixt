import { useOffersQuery } from "./services/offersApi";
import Offers from "./components/Offers";
import NavBar from "./components/NavBar";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useOffersQuery();
  return (
    <div className="App">
      <NavBar />
      <h1>Below are the list of offers</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>Something is wrong!!!</h2>}
      {error && <h2>Something is wrong!!!</h2>}
      {/* For most queries, it's usually sufficient to check for the isLoading state, then the isError state, then finally, assume that the data is available and render the successful state: */}
      {isSuccess && (
        <div>
          <Offers data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
