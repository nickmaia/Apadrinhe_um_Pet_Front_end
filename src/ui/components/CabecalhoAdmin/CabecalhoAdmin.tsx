import {
    CabecalhoContainerStyle,
    LogoStyle,
    LinksContainerStyle
} from './CabecalhoAdminStyle'
import { Link, Box } from '@mui/material'
import NextLink from 'next/link'


export default function CabecalhoAdmin() {
    return (
        <CabecalhoContainerStyle>
            <div className='ab'>
                <Link href='/'>
                    <LogoStyle src='Image/logo.svg' alt={'Adote um Pet'} />
                </Link>

                <LinksContainerStyle>
                    <Link href='/pets/Cadastro' component={NextLink}>
                        <a>Cadastrar Pet </a>
                    </Link>
                    <Link href='/pets/Relatorio' component={NextLink}>
                        <a>
                            Relatório{' '}

                            <Box
                                component={'span'}
                                sx={{ display: { sm: 'initial', xs: 'none' } }}
                            >
                                de Adoção
                            </Box>

                        </a>
                    </Link>
                </LinksContainerStyle>
            </div>
        </CabecalhoContainerStyle >
    );
}