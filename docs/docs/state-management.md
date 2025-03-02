# State Management with React Query

## Why Use React Query?
React Query simplifies data fetching and state management by providing:

- Automatic caching to avoid redundant API calls.
- Background updates to keep data fresh without manual refresh.
- Built-in error handling for API failures.
- Support for pagination and infinite queries.
- Optimistic updates for a smoother user experience.

## Setting Up React Query
To use React Query in the project, install it using npm or yarn:

```sh
npm install @tanstack/react-query
```

or

```sh
yarn add @tanstack/react-query
```

Then, wrap the application in a `QueryClientProvider` to enable React Query throughout the project:

```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
```

## Fetching Cryptocurrency Data with React Query

Here is an example of how to fetch cryptocurrency prices using React Query:

```js
import { useQuery } from '@tanstack/react-query';

const fetchCryptoData = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  if (!response.ok) {
    throw new Error('Failed to fetch crypto data');
  }
  return response.json();
};

const useCryptoData = () => {
  return useQuery(['cryptoData'], fetchCryptoData, {
    staleTime: 60000, // Cache data for 60 seconds
    refetchInterval: 30000, // Automatically refetch every 30 seconds
  });
};
```

## Handling Errors
If the API call fails, React Query provides built-in error handling. You can use it like this:

```js
const { data, error, isLoading } = useCryptoData();

if (isLoading) {
  return <p>Loading data...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
}
```

## Automatic Refetching and Polling
- **Refetching on Focus**: When the user switches back to the application, React Query automatically refetches the data.
- **Polling**: By setting `refetchInterval`, data can be updated periodically without user interaction.

Example:

```js
useQuery(['cryptoData'], fetchCryptoData, {
  refetchOnWindowFocus: true,
  refetchInterval: 30000, // Fetch new data every 30 seconds
});
```

## Stale Data Handling
React Query marks data as stale after a set duration (`staleTime`). If a user revisits a page, it determines whether fresh data is needed.

```js
useQuery(['cryptoData'], fetchCryptoData, {
  staleTime: 60000, // Data remains fresh for 60 seconds
});
```

## Mutations: Updating Data
If you need to modify data, use React Query mutations:

```js
import { useMutation } from '@tanstack/react-query';

const updateCryptoData = async (updatedData) => {
  const response = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(updatedData),
  });
  return response.json();
};

const { mutate } = useMutation(updateCryptoData);

const handleUpdate = () => {
  mutate({ id: 'bitcoin', price: 50000 });
};
```

## Conclusion
React Query simplifies state management for API requests by handling caching, background updates, and error handling automatically. It improves application performance and user experience by reducing unnecessary API calls and keeping data fresh.

