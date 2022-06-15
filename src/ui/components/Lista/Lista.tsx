import {
    ListaStyled,
    ItemListaStyled,
    FotoStyled,
    InformacoesStyled,
    NomeStyled,
    DescricaoStyled
} from "./Lista.style";
import { Button } from "@mui/material";
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListaProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {

    const tamanhoMaximoTexto = 200;

    return (
        <ListaStyled>
            {props.pets.map(pet => (
                <ItemListaStyled key={pet.id}>
                    <FotoStyled src={pet.foto} alt={pet.nome} />
                    <InformacoesStyled>
                        <NomeStyled>{pet.nome}</NomeStyled>
                        <DescricaoStyled>
                            {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
                        </DescricaoStyled>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        > Adotar {pet.nome}</Button>
                    </InformacoesStyled>
                </ItemListaStyled>
            ))}
        </ListaStyled>
    )

}