import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, CardMedia, Typography } from '@mui/material';

const AllCategoryNews = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}>
                    <Card className="news_cards" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '10px' }} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={item.urlToImage}
                        />
                        <CardContent className="news_card_content">
                            <Typography variant="h5" component="div">{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                        </CardContent>
                        <CardActions className="news_card_action">
                            <Button size="small" variant='text' style={{ color: 'white' }} href={item.url}>Read Article</Button>
                        </CardActions>
                    </Card>
                </Grow>
            </Grid>
        </Grid >
    )
}

export default AllCategoryNews