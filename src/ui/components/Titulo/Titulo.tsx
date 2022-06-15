import { TituloStyled, SubtituloStyle } from "./Titulo.style";

interface TituloProps {
    Titulo: string;
    Subtitulo?: string | JSX.Element;
}

export default function Titulo(props: TituloProps) {
    return (
        <>
            <TituloStyled> {props.Titulo}</TituloStyled>
            <SubtituloStyle> {props.Subtitulo}</SubtituloStyle>

        </>
    )
}