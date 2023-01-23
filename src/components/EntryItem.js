import styled from "styled-components";

export default function EntryItem(props) {
    const { day, description, amount, isTrue } = props;
    
    return (
        <EntryBox><p><span>{day}</span> {description}</p> <span className={`${isTrue ? "entrada" : "saida"}`}>{amount}</span></EntryBox>
    )
}

const EntryBox = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    & p, span {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }
    & span {
        color: #C6C6C6;
    }
    & span.saida {
        color: #C70000;
    }
    & span.entrada {
        color: #03AC00;
    }
`;