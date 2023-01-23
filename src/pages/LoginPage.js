import ContainerScreen from '../components/ContainerScreen';
import StyledTitle from '../components/StyledTitle';
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import LinkAlternativo from '../components/LinkAlternativo';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import apiAuth from "../services/apiAuth";
import UserContext from "../context/UserContext";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()

        apiAuth.login(form)
            .then(res => {
                const { name, token } = res.data;
                setUser({ name, token });
                navigate("/home")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

    return (
        <ContainerScreen>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput name="email" placeholder="E-mail" type="email" required value={form.email} onChange={handleForm} />
                <StyledInput name="password" placeholder="Senha" type="password" required value={form.password} onChange={handleForm} />
                <StyledButton>Entrar</StyledButton>
            </StyledForm>
            <LinkAlternativo to="/cadastro">Primeira vez? Cadastre-se!</LinkAlternativo>
        </ContainerScreen>
    );
}