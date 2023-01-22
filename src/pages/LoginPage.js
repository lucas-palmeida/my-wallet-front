import ContainerScreen from '../components/ContainerScreen';
import StyledTitle from '../components/StyledTitle';
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import LinkAlternativo from '../components/LinkAlternativo';

export default function LoginPage() {
    return (
        <ContainerScreen>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm>
                <StyledInput name="email" placeholder="E-mail" type="email" required />
                <StyledInput name="password" placeholder="Senha" type="password" required />
                <StyledButton>Entrar</StyledButton>
            </StyledForm>
            <LinkAlternativo to="/cadastro">Primeira vez? Cadastre-se!</LinkAlternativo>
        </ContainerScreen>
    );
}