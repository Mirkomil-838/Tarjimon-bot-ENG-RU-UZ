const axios = require("axios").default




var options = {
  method: 'GET',
  url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
  params: {langpair: 'en|it', q: 'Hello World!', mt: '1', onlyprivate: '0', de: 'a@b.c'},
  headers: {
    'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com',
    'x-rapidapi-key': '2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});