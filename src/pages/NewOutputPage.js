import styled from "styled-components";
import ContainerScreen from "../components/ContainerScreen";
import StyledForm from '../components/StyledForm';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledSubtitle from "../components/StyledSubtitle";

export default function NewOutputPage() {
    return (
        <ContainerMovements>
            <StyledSubtitle>Nova saída</StyledSubtitle>
            <StyledForm>
                <StyledInput name="value" placeholder="Valor" type="text" required />
                <StyledInput name="description" placeholder="Descrição" type="text" required />
                <StyledButton>Salvar saída</StyledButton>
            </StyledForm>
        </ContainerMovements>
    );
}

const ContainerMovements = styled(ContainerScreen)`
    justify-content: left;
`;