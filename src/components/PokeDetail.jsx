import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../apis/pokemon';
import withReactQuery from './withReactQuery';

const PokeDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['pokemon', id],
    queryFn: () => fetchPokemon(id)
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};

const EnhancedPokeDetail = withReactQuery(PokeDetail);
export default EnhancedPokeDetail;
