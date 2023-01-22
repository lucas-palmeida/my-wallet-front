import styled from "styled-components";
import ContainerScreen from "../components/ContainerScreen";
import EntryItem from "../components/EntryItem";
import StyledSubtitle from "../components/StyledSubtitle";

export default function HomePage() {
    const balance = true;  

    return (
        <ContainerScreen>
            <StyledHeader>
                <StyledSubtitle>Olá, Fulano</StyledSubtitle>
                <ion-icon name="log-out-outline"></ion-icon>
            </StyledHeader>
            <ContainerBalance>
                {balance ? (
                    <>
                        <ContainerEntries>
                            <EntryItem />
                            <EntryItem />
                            <EntryItem />
                        </ContainerEntries>
                        <ContainerTotal>SALDO <span>2849,96</span></ContainerTotal>
                    </>
                ) : (
                <StyledParagraph>Não há registros de entrada ou saída</StyledParagraph>
                )}
                
            </ContainerBalance>
            <ContainerButtons>
                <ButtonMov><ion-icon name="add-circle-outline"></ion-icon>Nova<br/>entrada</ButtonMov>
                <ButtonMov><ion-icon name="remove-circle-outline"></ion-icon>Nova<br/>entrada</ButtonMov>
            </ContainerButtons>
        </ContainerScreen>
    );
}

const StyledHeader = styled.header`
    width: 326px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > ion-icon {
        font-size: 36px;
        color: #FFFFFF;
    }
`;

const ContainerBalance = styled.div`
    width: 326px;
    height: 100vh;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 9px 0 13px;
    padding: 23px 11px 10px 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    overflow-x: scroll;
`;

const StyledParagraph = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
`;

const ContainerEntries = styled.div`
    width: 100%;
    height: 100%;
`;

const ContainerTotal = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    & > span {
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #03AC00;
    }
`;

const ContainerButtons = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
`;

const ButtonMov = styled.div`
    height: 114px;
    width: 155px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 16px;
    box-sizing: border-box;
    padding: 9px 7px;
    background: #A328D6;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: #FFFFFF;
    & > ion-icon {
        font-size: 27px;
    }
`;