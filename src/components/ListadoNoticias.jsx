import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {
	const { noticias, totalNoticias, handleChangePagina, pagina } =
		useNoticias();
	const totalPages = Math.ceil(totalNoticias / 20);
	return (
		<>
			<Typography align='center' marginY={5} component='h1' variant='h3'>
				Últimas Noticias
			</Typography>
			<Grid
				container
				spacing={2}
				direction='row'
				justifyContent='center'
				alignItems='center'
				marginBottom={5}
			>
				{noticias.map(noticia => (
					<Noticia key={noticias.url} noticia={noticia} />
				))}
			</Grid>
			<Stack
				sx={{ marginY: 5 }}
				spacing={2}
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				<Pagination
					count={totalPages}
					color='primary'
					onChange={handleChangePagina}
					page={pagina}
				/>
			</Stack>
		</>
	);
};

export default ListadoNoticias;
