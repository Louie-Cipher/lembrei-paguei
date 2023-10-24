import EntryScreen from 'components/EntryScreen';
import { MetaRepository } from 'db/repositories';

export default () => <EntryScreen title='Metas' repository={MetaRepository} />;
