import React, { useState } from 'react';
import { Grid } from '@mui/material';
import NewsHeading from './NewsHeading.js';
import NewsCard from './NewsCard.js';
import MainBox from './Components/MainBox.js'

const NewsByCategory = ({ data, id }) => {
    const [isShowAllNews, setIsShowAllNews] = useState(false);
    const showAllData = (isShowAll) => {

        setIsShowAllNews(isShowAll);
    }

    return <>
        <NewsHeading title={data.title} id={id} showAllData={showAllData} />

        <MainBox>
            <Grid container spacing={2}>
                {isShowAllNews ? data.data.map((data, index) => {
                    return <NewsCard urlToImage={data.urlToImage} title={data.title} description={data.description} url={data.url} key={index} id={Math.random()} />
                }) : data.data.slice(0, 4).map((data, index) => {
                    return <NewsCard urlToImage={data.urlToImage} title={data.title} description={data.description} url={data.url} key={index} id={Math.random()} />
                })}
            </Grid>
        </MainBox>
    </>
}

export default NewsByCategory