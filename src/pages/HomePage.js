import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerScreen from "../components/ContainerScreen";
import EntryItem from "../components/EntryItem";
import StyledSubtitle from "../components/StyledSubtitle";
import UserContext from "../context/UserContext";
import apiBalance from "../services/apiBalance";

export default function HomePage() {
    const [entries, setEntries] = useState([]);
    const { user } = useContext(UserContext);
    const [ total, setTotal ] = useState(0);

    useEffect(getListBalance, [realizaSoma]);

    function getListBalance() {
        apiBalance.getEntries(user.token)
            .then(res => {
                setEntries(res.data);
                realizaSoma();
            })
            .catch(err => {
                if (!user.token) {
                    alert("Faça login")
                } else {
                    alert(err.response.data.message)
                }
            })
    }

    function realizaSoma() {
        let soma = 0;
        for(let i = 0; i < entries.length; i++) {
            if(entries[i].isTrue === true) {
                soma += parseInt(entries[i].amount);
            }
            else {
                soma -= parseInt(entries[i].amount);
            }
        }
        setTotal(soma);
    }

    return (
        <ContainerScreen>
            <StyledHeader>
                <StyledSubtitle>Olá, {user.name}</StyledSubtitle>
                <ion-icon name="log-out-outline"></ion-icon>
            </StyledHeader>
            <ContainerBalance>
                {entries.length > 0 ? (
                    <>
                        <ContainerEntries>
                            {entries.map(e => (
                                <EntryItem key={e._id} day={e.day} description={e.description} amount={e.amount} isTrue={e.isTrue} />
                            ))}
                        </ContainerEntries>
                        <ContainerTotal>SALDO <span className={`${total > 0 ? "verde" : "vermelho"}`}>R$ {total}</span></ContainerTotal>
                    </>
                ) : (
                <StyledParagraph>Não há registros de entrada ou saída</StyledParagraph>
                )}
                
            </ContainerBalance>
            <ContainerButtons>
                <ButtonMov to="/nova-entrada"><ion-icon name="add-circle-outline"></ion-icon>Nova<br/>entrada</ButtonMov>
                <ButtonMov to="/nova-saida"><ion-icon name="remove-circle-outline"></ion-icon>Nova<br/>saída</ButtonMov>
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
    & span.vermelho {
        color: #C70000;
    }
`;

const ContainerButtons = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
`;

const ButtonMov = styled(Link)`
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