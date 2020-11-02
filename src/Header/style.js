import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction:column;
    margin: 16px;
    border-radius: 8px;
    background-color: #e5e5e5;
    padding: 20px;

    @media screen and (min-width: 767px) {
        padding: 40px;
        margin: 32px;
    }
`
export const HeaderText = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    @media screen and (min-width: 767px) {
        font-size: 40px;
    }
`

export const Location = styled.div`
    display:flex;
    align-items: center;
    margin: 0 auto;
`

export const Icon = styled.img`
    height: 18px;
    margin-right: 10px;
    @media screen and (min-width: 767px) {
        height: 26px;
    }
`
export const City = styled.span`
    font-size : 18px;
    font-weight: 500;
    @media screen and (min-width: 767px) {
        font-size: 30px;
    }
`