import styled from "styled-components";
import ContainerScreen from "../components/ContainerScreen";
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledSubtitle from "../components/StyledSubtitle";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiBalance from "../services/apiBalance";
import UserContext from "../context/UserContext";

export default function NewEntryPage() {
    const [form, setForm] = useState({ amount: "", description: "", isTrue: true });
    const navigate = useNavigate()
    const { user } = useContext(UserContext);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleRegister(e) {
        e.preventDefault()

        apiBalance.setEntry(form, user.token)
            .then(res => {
                navigate("/home")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

    return (
        <ContainerMovements>
            <StyledSubtitle>Nova entrada</StyledSubtitle>
            <StyledForm onSubmit={handleRegister}>
                <StyledInput name="amount" placeholder="Valor" type="number" step="0.01" required value={form.amount} onChange={handleForm} />
                <StyledInput name="description" placeholder="Descrição" type="text" required value={form.description} onChange={handleForm} />
                <StyledButton>Salvar entrada</StyledButton>
            </StyledForm>
        </ContainerMovements>
    );
}

const ContainerMovements = styled(ContainerScreen)`
    justify-content: left;
`;