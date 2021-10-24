const PORT = 8000;
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const url = 'https://www.infobae.com/';

const app = express();
axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];

        $('.cst_hl', html).each(function(){
            const title = $(this).text();
            const url = $(this).find('a').attr("href");
            articles.push({ 
                title,
                url

            })

        })
        console.log(articles);

    }).catch(err => console.log(">>> " + err));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));