import React, { useEffect, useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NewsByCategory from './NewsByCategory.js';
import Header from './Header.js';
import axios from './AxiosAPI.js';

const NEWS_TITLES = ['Business Today', 'Wall Street Journal', 'Tesla News', 'Apple News', 'TechCrunch Headlines']


const MainNews = () => {

    const [allArticledata, setAllArticleData] = useState([]);

    const integrateAllData = (data) => {
        let allData = [];
        let i = 0;
        do {
            allData.push({ title: NEWS_TITLES[i], data: data[i] });
            i++
        } while (i < data.length);
        setAllArticleData(allData);
    }

    useEffect(() => {
        console.log('API executed.........')
        const usData = axios.getUSData();
        const wallStreetData = axios.getWallStreetData();
        const appleData = axios.getAppleData();
        const techcrunchData = axios.getTechData();

        let localData = [];

        const promises = [usData, wallStreetData, appleData, techcrunchData];
        Promise.allSettled(promises)
            .then((results) => {
                results.forEach((result) => {
                    localData = [...localData, result.value.data.articles];
                    console.log(result.value.data)
                })
                integrateAllData(localData);
            }).catch(error => console.log(error));
    }, [])


    return (
        <div>
            <Header />

            {allArticledata.length > 0 ? allArticledata.map((item, index) => {
                return <NewsByCategory data={item} key={index} id={index} />
            }) : <strong>'No data found'</strong>}

        </div>
    )
}

export default MainNews;