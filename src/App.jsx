import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Example from "./components/Example";

/* 
  The QueryClient is used to create a cache. This cache is used to store the data from the API calls.
  This cache can be shared across mulitple components by wrapping components QueryClientProvider component.
*/
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <Example />
      </header>
    </QueryClientProvider>
  );
}

export default App;
