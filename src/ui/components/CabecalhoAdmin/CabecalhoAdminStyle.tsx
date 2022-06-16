import { styled } from '@mui/material';
//gap é semelhante ao padding

export const CabecalhoContainerStyle = styled('header')`
    height: 155px;
    background-color: #f6f6f6;
    padding: ${({ theme }) => theme.spacing(2)};

    .ab {
        height: 100%;
        max-width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2)};
    }

    a{
        font-size: 14px;
    }

`;
export const LogoStyle = styled('img')`
    width: 125px;
`;

export const LinksContainerStyle = styled('nav')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-end;

`;