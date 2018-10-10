'use strict';

const Hapi = require('hapi');
const axios = require('axios');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        cors: true
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
        return {data: 'it doesnt work!'};
        // // return JSON.stringify({data:'response'});
        // try {
        //     const response = await axios.get('https://restcountries.eu/rest/v2/lang/es');
        //     // return new Promise.resolve({ whoa: response })
        //     // return JSON.stringify(response);
        //     return { whoa: 'response' };
        // } catch (err) {
        //     console.log(err);
        // }

        // axios.get('https://restcountries.eu/rest/v2/lang/es')
        //     .then(function (response) {
        //         h({
        //             error: true,
        //             errMessage: 'no public bird found',
        //         });
        //     })
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
//*************************************************************************************************************************/

// let myRequest = () => {
// axios.get('https://restcountries.eu/rest/v2/lang/es')
    //         .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
    // };

// async function getUser() {
//     try {
//         const response = await axios.get('https://restcountries.eu/rest/v2/lang/es');
//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// }
