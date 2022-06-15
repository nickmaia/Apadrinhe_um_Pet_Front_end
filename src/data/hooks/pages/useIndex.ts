import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {

    const [listaPets, setListaPets] = useState<Pet[]>([]),
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/pet')
            .then((resposta) => {
                setListaPets(resposta.data);
            })
    }, [])

    function adotar() {
        if (petSelecionado !== null) {
            if (validarDadosAdocao()) {
                ApiService.post('/adocoes', {
                    pet_id: petSelecionado.id,
                    email,
                    valor,
                })
                    .then(() => {
                        setPetSelecionado(null);
                        setMensagem('Pet adotado com sucesso!');
                        limparFormulario();
                    })
                    .catch((errors: AxiosError) => {
                        setMensagem(errors.response?.data.message);
                    })
            }
            else {
                setMensagem('preencha todos os campos corretamente')
            }

        }
    }

    function validarDadosAdocao() {
        return email.length > 0 && valor.length > 0;
    }

    function limparFormulario() {
        setEmail('');
        setValor('');
    }

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar,
    };
}