import Footer, { FooterLeft, FooterRight } from '@/components/layout/Footer/Footer';

const DefaultFooterTemplate = () => {
	return (
		<Footer>
			<FooterLeft>
				<span>Copyright © {new Date().getFullYear()} E-Commerce</span>
			</FooterLeft>
			<FooterRight>
				<span>Desarrollado para IPSS</span>
			</FooterRight>
		</Footer>
	);
};

export default DefaultFooterTemplate;
