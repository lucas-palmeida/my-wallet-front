import styled from "styled-components";
import ContainerScreen from "../components/ContainerScreen";
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledSubtitle from "../components/StyledSubtitle";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import apiBalance from "../services/apiBalance";

export default function NewOutputPage() {
    const [form, setForm] = useState({ amount: "", description: "", isTrue: false });
    const navigate = useNavigate()
    const { user } = useContext(UserContext);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleRegister(e) {
        e.preventDefault()

        apiBalance.setOutput(form, user.token)
            .then(res => {
                navigate("/home")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

    return (
        <ContainerMovements>
            <StyledSubtitle>Nova saída</StyledSubtitle>
            <StyledForm onSubmit={handleRegister}>
                <StyledInput name="amount" placeholder="Valor" type="number" required value={form.amount} onChange={handleForm} />
                <StyledInput name="description" placeholder="Descrição" type="text" required value={form.description} onChange={handleForm} />
                <StyledButton>Salvar saída</StyledButton>
            </StyledForm>
        </ContainerMovements>
    );
}

const ContainerMovements = styled(ContainerScreen)`
    justify-content: left;
`;