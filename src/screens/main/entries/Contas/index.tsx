import EntryScreen from 'components/EntryScreen';
import { ContaRepository } from 'db/repositories';

export default () => <EntryScreen title='Contas' repository={ContaRepository} />;
