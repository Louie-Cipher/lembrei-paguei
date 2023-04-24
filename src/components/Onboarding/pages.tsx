import { StyleSheet } from 'react-native';
import { Image, Text } from 'react-native';
import { Page } from 'react-native-onboarding-swiper';
import Logo from '../../../assets/logo.svg';

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
	emojiText: {
		fontSize: 100,
	},
});
const pages: Page[] = [
	{
		backgroundColor: '#74ca54',
		title: 'Boas vindas ao Lembrei, Paguei!',
		subtitle: 'Seu app de controle financeiro',
		image: <Logo width={200} height={200} color='#0ff' />,
	},
	{
		backgroundColor: '#d5b777',
		title: 'Seu lembrete personalizado de contas',
		subtitle:
			'Não se esqueça mais de compromissos financeiros.\n\n' +
			'Com notificações personalizadas, você nunca mais vai perder uma conta',
		image: <Text style={styles.emojiText}>⏰</Text>,
	},
	{
		backgroundColor: '#77d580',
		title: 'Tenha controle de seus gastos',
		subtitle:
			'Todas as informações de despesas na palma da sua mão.\n\n' +
			'Com gráficos e relatórios, você pode acompanhar seus gastos e economizar',
		image: <Text style={styles.emojiText}>💰</Text>,
	},
	{
		backgroundColor: '#fff',
		title: 'Vamos começar?',
		subtitle: 'Crie sua conta e tenha acesso a todas as funcionalidades do app',
		image: <Text style={styles.emojiText}>🚀</Text>,
	},
];

export default pages;
