import styled from 'styled-components';

export const PersonelCardStyled = styled.div`
    display: flex;
    align-items:center;
    border: 1px solid 474747ba;
    border-radius: 12px;
    background: #474747ba;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.16),0 6px 20px 0 rgba(0,0,0,0.16);
        img{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.16),0 6px 20px 0 rgba(0,0,0,0.16);
        }
    }
`

export const PersonImage = styled.img`
    max-width: 320px;
    border-radius: 50%;
    margin: 24px;
`

export const PersonName = styled.div`
    font-size: 48px;
    font-weight: 600;
`

export const PersonDetail = styled.code``

export const PersonInformation = styled.div``

export const PersonDetailData = styled.code`
    margin: 8px;
    font-size: 24px;
    display: block;
`