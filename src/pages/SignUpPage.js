import ContainerScreen from '../components/ContainerScreen';
import StyledTitle from '../components/StyledTitle';
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import LinkAlternativo from '../components/LinkAlternativo';

export default function SignUpPage() {
    return (
        <ContainerScreen>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm>
                <StyledInput name="name" placeholder="Nome" type="name" required />
                <StyledInput name="email" placeholder="E-mail" type="email" required />
                <StyledInput name="password" placeholder="Senha" type="password" required />
                <StyledInput name="password" placeholder="Confirme a senha" type="password" required />
                <StyledButton>Cadastrar</StyledButton>
            </StyledForm>
            <LinkAlternativo to="/">Já tem uma conta? Entre agora!</LinkAlternativo>
        </ContainerScreen>
    );
}