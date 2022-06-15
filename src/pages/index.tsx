//Grid por padrão é composta por 12 colunas
/*  fullWidth preenche o tamanho inteiro 
value={email}
onChange={(e) => setEmail(e.target.value)}
Esta funções estão atualizando a variavel email
*/


import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'
import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'


const Home: NextPage = () => {
  const {
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
  } = useIndex()

  return (
    <div>
      <Titulo Titulo="Veja nossos pets disponíveis"
        Subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet vitualmente.</strong>
          </span>
        } />
      <Lista
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button
            color={'secondary'}
            onClick={() => setPetSelecionado(null)}
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
    </div >
  )
}

export default Home
