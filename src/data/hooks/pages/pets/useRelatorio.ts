import { useEffect, useState } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiService";

export function useRelatorio() {

    const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

    useEffect(() => {
        ApiService.get('apadrinheumpet.herokuapp.com/adocoes').then((resposta) => {
            setListaRelatorio(resposta.data);
        })
    }, [])

    return {
        listaRelatorio
    }
}