import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, CardMedia, Typography } from '@mui/material';
import './NewsCard.css';

const NewsCard = ({ urlToImage, title, description, url, id }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>

            <Card className="news_cards" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '10px' }} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={urlToImage}
                />
                <CardContent className="news_card_content">
                    <Typography variant="h5" component="div">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
                <CardActions className="news_card_action" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button target="_blank" href={url}>Read Article</Button>
                    <Typography variant="body2" style={{ color: 'white' }}>{id}</Typography>
                </CardActions>
            </Card>

        </Grid>
    )
}

export default NewsCard