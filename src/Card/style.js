import styled from 'styled-components'


export const Wrapper = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #e5e5e5;
margin-top: 10px;
border-radius: 4px;
padding: 8px;

@media screen and (min-width: 767px) {
    flex-direction: column;
    margin-right: 16px;
    padding: 16px;
    height: 200px;
    width: 100px;
    margin-top: 0px;
    border-radius: 8px;
    &:last-child {
        margin-right: 0px;
    }
}
`

export const Day = styled.div`
font-weight: 500;
@media screen and (min-width: 767px) {
    font-size :20px;
    margin-bottom: 6px;
}
`
export const DateTime = styled.div`
margin-left: 8px;
@media screen and (min-width: 767px) {
    margin-left: 0px;
}
`
export const Icon = styled.img`

`
export const Temperature = styled.div`
font-weight: 700;
@media screen and (min-width: 767px) {
    margin-bottom: 6px;
    font-size :20px;
}
`
export const Description = styled.div`
margin-left: 8px;
@media screen and (min-width: 767px) {
    margin-left: 0px;
    font-size :20px;
}
`
