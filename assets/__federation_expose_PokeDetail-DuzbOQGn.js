import { importShared } from './__federation_fn_import-U9H0mC5v.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const fetchPokemon = async (id) => {
    console.log(`https://pokeapi.co/api/v2/pokemon/${+id}`);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${+id}`);
    return res.json();
};

const {QueryClient,QueryClientProvider} = await importShared('@tanstack/react-query');

const queryClient = new QueryClient();
const withReactQuery = (WrappedComponent) => {
  return function QueryWrapper(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedComponent, { ...props }) });
  };
};

const {useSuspenseQuery} = await importShared('@tanstack/react-query');

const {useParams} = await importShared('react-router-dom');
const PokeDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(id)
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: data.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.sprites.front_default, alt: data.name })
  ] });
};
const EnhancedPokeDetail = withReactQuery(PokeDetail);

export { EnhancedPokeDetail as default };
