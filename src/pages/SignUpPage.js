import ContainerScreen from '../components/ContainerScreen';
import StyledTitle from '../components/StyledTitle';
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import LinkAlternativo from '../components/LinkAlternativo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apiAuth from '../services/apiAuth';

export default function SignUpPage() {
    const [form, setForm] = useState({name: "", email: "", password: "", confirmPassword: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSignUp(e) {
        e.preventDefault()

        apiAuth.signUp(form)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }                    

    return (
        <ContainerScreen>
            <StyledTitle>MyWallet</StyledTitle>
            <StyledForm onSubmit={handleSignUp}>
                <StyledInput name="name" placeholder="Nome" type="name" required value={form.name} onChange={handleForm} />
                <StyledInput name="email" placeholder="E-mail" type="email" required value={form.email} onChange={handleForm} />
                <StyledInput name="password" placeholder="Senha" type="password" required value={form.password} onChange={handleForm} />
                <StyledInput name="confirmPassword" placeholder="Confirme a senha" type="password" required value={form.confirmPassword} onChange={handleForm} />
                <StyledButton>Cadastrar</StyledButton>
            </StyledForm>
            <LinkAlternativo to="/">Já tem uma conta? Entre agora!</LinkAlternativo>
        </ContainerScreen>
    );
}