import {useOffersQuery} from './services/offersApi'
import Offers from './components/Offers';
import NavBar from './components/NavBar';

function App() {
  const {data, error, isLoading, isFetching, isSuccess} = useOffersQuery()
  return (
    <div className="App">
      <NavBar />
      {isLoading && <h2>...Loading</h2> }
      {isFetching && <h2>Something is wrong!!!</h2>}
      {error && <h2>Something is wrong!!!</h2>}
      {isSuccess && (
        <div>
          <Offers data={data} />
        </div>
      )}
    </div>
  );
}

export default App;