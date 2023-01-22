import styled from "styled-components";

export default function EntryItem() {
    return (
        <EntryBox><p><span>30/01</span> Almoço mãe</p> <span>39,90</span></EntryBox>
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
    & span:nth-child(1) {
        color: #C6C6C6;
    }
    & span:nth-child(2) {
        color: #C70000;
    }
`;