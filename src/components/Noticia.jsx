import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Noticia = ({ noticia }) => {
	const { urlToImage, url, title, description, source } = noticia;
	const urlImage = urlToImage
		? urlToImage
		: 'https://via.placeholder.com/200';
	const shortText = text => {
		if (text) {
			const short = text.substr(0, 120) + '...';
			return short;
		} else {
			return 'No description';
		}
	};
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card sx={{ minHeight: 400 }}>
				{urlImage && (
					<CardMedia
						component='img'
						height='200'
						image={urlImage}
						alt={title}
					/>
				)}
				<CardContent>
					<Typography variant='body1' color='error'>
						{source.name}
					</Typography>
					<Typography gutterBottom variant='h6' component='div'>
						{title.substr(0, 30) + '...'}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{shortText(description)}
					</Typography>
				</CardContent>
				<CardActions>
					<Link
						href={url}
						target='_blank'
						variant='button'
						width={'100%'}
						textAlign={'center'}
						sx={{ textDecoration: 'none' }}
					>
						Leer Noticia...
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};
export default Noticia;
