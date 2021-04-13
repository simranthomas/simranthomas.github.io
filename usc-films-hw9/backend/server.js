// Import express
const express = require('express');
const path = require('path');
// import axios 
const axios = require("axios");

// import cors
const cors = require("cors");

// Initialize express
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/frontend')));

var tmdb_api_key = '38bbe79ff3d3e4cc74577eb730d7626f';
var tmdb_base_url = 'https://api.themoviedb.org/3/'; 
var image_base_url = 'https://image.tmdb.org/t/p/w500';
var carousel_image_base_url = 'https://image.tmdb.org/t/p/original';

var result_homepage = {}

// API Route for homepage
app.get('/api/homepage', async (req, res) => {

    async function get_endpoint_data(media_type, mid_url, end_url, result_dict_key)
    {
        // Construct endpoint URL
        var endpoint_url = `${tmdb_base_url + mid_url}?api_key=${tmdb_api_key}${end_url}`;

        // Check media_type to get correct key from response
        var title_key = (media_type == 'movie') ? 'title' : 'name';
        var poster_path_key = (result_dict_key == 'carousel_movies') ? 'backdrop_path' : 'poster_path'
        var img_base_url = (result_dict_key == 'carousel_movies') ?  carousel_image_base_url : image_base_url; 

        await axios.get(endpoint_url)
        .then((response) => {
            response = response.data.results;
            var media_list = [];
            for(var i = 0; i < response.length; i++)
            {
                if(response[i][poster_path_key] != null) {
                    var media = {
                        'id' : response[i]['id'],
                        'title' : response[i][title_key],
                        'image_path' : img_base_url + response[i][poster_path_key],
                        'media_type' : media_type
                    }
                    media_list.push(media);
                }
            }
            result_homepage[result_dict_key] = media_list;
        },
        (error) => {
            result_homepage['error'] = "Error";
        });
    }
    // Currently Playing Movies Carousel Endpoint
    get_endpoint_data('movie', 'movie/now_playing', '&language=en-US&page=1', 'carousel_movies');
    
    // Popular Movies Endpoint
    get_endpoint_data('movie', 'movie/popular', '&language=en-US&page=1', 'popular_movies');

    // Top Rated Movies Endpoint
    get_endpoint_data('movie', 'movie/top_rated', '&language=en-US&page=1', 'top_rated_movies');

    // // Trending Movies Endpoint
    // get_endpoint_data('movie', 'trending/movie/day', '', 'trending_movies');
    
    // Popular TV Shows Endpoint
    get_endpoint_data('tv', 'tv/popular', '&language=en-US&page=1', 'popular_tv');

    // Top Rated TV Shows Endpoint
    get_endpoint_data('tv', 'tv/top_rated', '&language=en-US&page=1', 'top_rated_tv');
    
    // Trending TV Shows Endpoint
    get_endpoint_data('tv', 'trending/tv/day', '', 'trending_tv');

    res.status(200).send(result_homepage);
});


// API Route for Details page
app.get('/api/media_details', async (req, res) => {

    // Videos Endpoint
    var media_type = req.query.mediaType;
    var media_id = req.query.id;

    // var media_type = 'movie';
    // var media_id = 464052;

    let result = {}

    var endpoint_url = `${tmdb_base_url + media_type}/${media_id}/videos?api_key=${tmdb_api_key}&language=en-US&page=1`;

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data.results;
        // if no trailer or teaser present play default video
        var video_details = {};
        for(var i = 0; i < response.length; i++)
        {
            // Play teaser if there is no trailer
            type = response[i]['type']
            if(type == 'Trailer')
            {
                // if(type == 'Teaser' && video_details['key'] != 'tzkWB85ULJY')
                //     continue;

                video_details = {
                    'site' : response[i]['site'],
                    'type' : response[i]['type'],
                    'name' : response[i]['name'],
                    'key' : response[i]['key']
                }
                if(type == 'Trailer')
                    break;
            }
        }
        result['media_video_details'] = video_details;
    },
    (error) => {
        result['error'] = "Error";
    });

    // Details Endpoint
    var endpoint_url = `${tmdb_base_url + media_type}/${media_id}?api_key=${tmdb_api_key}&language=en-US&page=1`;
    // set key names based on media_type
    var title_key = (media_type == 'movie') ? 'title' : 'name';
    var date_key = (media_type == 'movie') ? 'release_date' : 'first_air_date';
    var runtime_key = (media_type == 'movie') ? 'runtime' : 'episode_run_time';

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data;
        result['media_details'] = {}
        result['media_details']['title'] = response[title_key];
        result['media_details']['genres'] = response['genres'];
        result['media_details']['spoken_languages'] = response['spoken_languages'];
        result['media_details']['release_air_date'] = response[date_key];
        result['media_details']['runtime'] = response[runtime_key];
        result['media_details']['overview'] = response['overview'];
        result['media_details']['vote_average'] = response['vote_average'];
        result['media_details']['tagline'] = response['tagline'];
        result['media_details']['poster_path'] = image_base_url + response['poster_path'];

    },
    (error) => {
        result['error'] = "Error";
    });

    // Cast and Crew Endpoint
    var endpoint_url = `${tmdb_base_url + media_type}/${media_id}/credits?api_key=${tmdb_api_key}&language=en-US&page=1`;

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data.cast;
        var cast_list = [];
        for(var i = 0; i < response.length; i++)
        {
            if(response[i]['profile_path'] != null) {
                var cast = {
                    'id' : response[i]['id'],
                    'name' : response[i]['name'],
                    'character' : response[i]['character'],
                    'profile_path' : image_base_url + response[i]['profile_path']
                }
                cast_list.push(cast);
            }
        }
        result['cast_details'] = cast_list;
    },
    (error) => {
        result['error'] = "Error";
    });

    // Reviews Endpoint
    var endpoint_url = `${tmdb_base_url + media_type}/${media_id}/reviews?api_key=${tmdb_api_key}&language=en-US&page=1`;

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data.results;
        var review_list = [];
        for(var i = 0; i < Math.min(response.length, 10); i++)
        {
            // if no avatar_path use default image
            // else check if full link
            var avatar_path = response[i]['author_details']['avatar_path'];
            if(avatar_path != null) {
                
                if(!avatar_path.includes("https://"))
                    avatar_path = "https://image.tmdb.org/t/p/original" + avatar_path
                
                else if(avatar_path.charAt(0) == '/')
                    avatar_path = avatar_path.slice(1);
            }
            // default image
            else
                avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";

            var review = {
                'author' : response[i]['author'],
                'content' : response[i]['content'],
                'created_at' : response[i]['created_at'],
                'url' : response[i]['url'],
                'rating' : response[i]['author_details']['rating'],
                'avatar_path' : avatar_path
            }
            review_list.push(review);
        }
        result['review_details'] = review_list;
    },
    (error) => {
        result['error'] = "Error";
    });

    // Recommended Movies/TV Endpoint
    var endpoint_url = `${tmdb_base_url + media_type}/${media_id}/recommendations?api_key=${tmdb_api_key}&language=en-US&page=1`;
    var title_key = (media_type == 'movie') ? 'title' : 'name';

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data.results;
        var recommendations_list = [];
        for(var i = 0; i < response.length; i++)
        {
            if(response[i]['poster_path'] != null) {
                var media = {
                    'id' : response[i]['id'],
                    'title' : response[i][title_key],
                    'image_path' : image_base_url + response[i]['poster_path'],
                    'media_type' : media_type
                }
                recommendations_list.push(media);
            }
        }
        result['recommendations'] = recommendations_list;
    },
    (error) => {
        result['error'] = "Error";
    });

    // Similar Movies/TV Endpoint
    var endpoint_url = `${tmdb_base_url + media_type}/${media_id}/similar?api_key=${tmdb_api_key}&language=en-US&page=1`;
    var title_key = (media_type == 'movie') ? 'title' : 'name';

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data.results;
        var similar_list = [];
        for(var i = 0; i < response.length; i++)
        {
            if(response[i]['poster_path'] != null) {
                var media = {
                    'id' : response[i]['id'],
                    'title' : response[i][title_key],
                    'image_path' : image_base_url + response[i]['poster_path'],
                    'media_type' : media_type
                }
                similar_list.push(media);
            }
        }
        result['similar'] = similar_list;
    },
    (error) => {
        result['error'] = "Error";
    });

    res.status(200).send(result);

});

// API Route for Cast Details page
app.get('/api/cast_details', async (req, res) => {

    // Cast Deatils Endpoint
    var person_id = req.query.personId;

    let result = {}

    var endpoint_url = `${tmdb_base_url}person/${person_id}?api_key=${tmdb_api_key}&language=en-US&page=1`;

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data;
        // result = {}
        result['birthday'] = response['birthday'];
        result['gender'] = response['gender'];
        result['name'] = response['name'];
        result['homepage'] = response['homepage'];
        result['also_known_as'] = response['also_known_as'];
        result['known_for_department'] = response['known_for_department'];
        result['biography'] = response['biography'];
        result['place_of_birth'] = response['place_of_birth'];
        result['profile_path'] = response['profile_path'];
    },
    (error) => {
        result['error'] = "Error";
    });


    // Cast External IDs Endpoint
    var endpoint_url = `${tmdb_base_url}person/${person_id}/external_ids?api_key=${tmdb_api_key}&language=en-US&page=1`;

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data;
        // result = {}
        result['imdb_id'] = response['imdb_id'];
        result['facebook_id'] = response['facebook_id'];
        result['instagram_id'] = response['instagram_id'];
        result['twitter_id'] = response['twitter_id'];
    },
    (error) => {
        result['error'] = "Error";
    });

    res.status(200).send(result);

});


// API Route for Autcomplete
app.get('/api/autocomplete', async (req, res) => {

    // Multi-Search Endpoint
    /********** TO BE CHANGED *************/
    var query = req.query.searchQuery;

    let result = {}
    
    var endpoint_url = `${tmdb_base_url}search/multi?api_key=${tmdb_api_key}&language=en-US&page=1&query=${query}`;

    await axios.get(endpoint_url)
    .then((response) => {
        response = response.data.results;
        var search_list = [];
        // retrieve only first 7 results
        for(var i = 0; i < response.length && search_list.length < 7; i++)
        {
            var media_type = response[i]['media_type'];
            var title_key = (media_type == 'movie') ? 'title' : 'name';

            if(media_type == 'movie' || media_type == 'tv')
            {
                if(response[i]['backdrop_path'] != null) {
                    var media = {
                        'id' : response[i]['id'],
                        'title' : response[i][title_key],
                        'backdrop_path' : response[i]['backdrop_path'],
                        'media_type' : response[i]['media_type']
                    }
                    search_list.push(media);
                }
            }
        }
        result['search_results'] = search_list;
    },
    (error) => {
        result['error'] = "Error";
    });

    res.status(200).send(result['search_results']);

});

app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})

var server = app.listen(8080, () => {
    console.log("Backend Application listening at http://localhost:8080")
});

module.exports = app;
