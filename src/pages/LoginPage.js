import ContainerScreen from '../components/ContainerScreen';
import StyledTitle from '../components/StyledTitle';
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import LinkAlternativo from '../components/LinkAlternativo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apiAuth from "../services/apiAuth";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()

        apiAuth.login(form)
            .then(res => {
                const { token } = res.data                                 // VERIFICAR RETORNO DE DADOS PARA TELA DE BOAS VINDAS
                localStorage.setItem("user", JSON.stringify({ token }))    // VERIFICAR RETORNO DE DADOS PARA TELA DE BOAS VINDAS
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