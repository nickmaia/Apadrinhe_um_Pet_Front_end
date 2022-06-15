import { styled, ThemeProvider } from '@mui/material';

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const ItemListaStyled = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(5)}; //Semelhante ao paddind e ao margin. A propriedade gap CSS é uma propriedade abreviada para row-gap e column-gap especificando as medianizes entre as linhas e colunas da grade.
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    ${({ theme }) => theme.breakpoints.down('md')}{
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(2)};
        margin-bottom: ${({ theme }) => theme.spacing(10)};
}
`;

export const FotoStyled = styled('img')`
    width: 100%;
`;

export const InformacoesStyled = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
`;

export const NomeStyled = styled('h2')`
    margin: 0;
`;

export const DescricaoStyled = styled('p')`
    margin: 0;
    word-break: break-word; //Quebrar a palavra quando ultrapassar o layaut
`;

