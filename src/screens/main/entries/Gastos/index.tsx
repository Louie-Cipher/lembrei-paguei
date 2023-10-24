import EntryScreen from 'components/EntryScreen';
import { GastoRepository } from 'db/repositories';

export default () => <EntryScreen title='Gastos' repository={GastoRepository} />;
