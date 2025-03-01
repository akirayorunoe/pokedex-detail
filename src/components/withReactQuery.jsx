import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
/* eslint-disable no-unused-vars */
const withReactQuery = (WrappedComponent) => {
    return function QueryWrapper(props) {
        return (
            <QueryClientProvider client={queryClient}>
                <WrappedComponent {...props} />
            </QueryClientProvider>
        );
    };
};

export default withReactQuery;