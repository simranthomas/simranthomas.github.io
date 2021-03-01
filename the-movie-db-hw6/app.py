from flask import Flask, make_response
import requests
app = Flask(__name__)

# Define api_token, url and headers
tmdb_api_key = "38bbe79ff3d3e4cc74577eb730d7626f"
tmdb_api_url = "https://api.themoviedb.org/3/"
headers = {
    "Content-type" : "application/json"
}

# Load Homepage
@app.route("/", methods = ['GET'])
def load_homepage():
    return app.send_static_file('index.html')


# TMDB Trending Movies Endpoint
@app.route("/trending_movies", methods = ['GET'])
def get_trending_movies():
    
    media_type = "movie"
    time_window = "week"
    endpoint_url = f'{tmdb_api_url}trending/{media_type}/{time_window}?api_key={tmdb_api_key}'

    response = requests.get(endpoint_url, headers = headers).json()

    top_trending_movies = {'top_movies': []}
    for item in response['results'][:5]:
        top_trending_movies['top_movies'].append({
            'title': item['title'], 
            'backdrop_path': item['backdrop_path'], 
            'release_date': item['release_date']
            })

    return make_response(top_trending_movies, 200)


# TMDB TV Shows Airing Today Endpoint
@app.route("/tv_shows_airing_today", methods = ['GET'])
def get_tv_shows_airing_today():

    endpoint_url = f'{tmdb_api_url}tv/airing_today?api_key={tmdb_api_key}'

    response = requests.get(endpoint_url, headers = headers).json()

    top_tv_shows = {'top_tv_shows': []}
    for item in response['results'][:5]:
        top_tv_shows['top_tv_shows'].append({
            'name': item['name'], 
            'backdrop_path': item['backdrop_path'], 
            'first_air_date': item['first_air_date']
            })

    return make_response(top_tv_shows, 200)


# function to extract required fields based on media_type
def extract_search_fields(search_list, media_type):

    final_search_results = []
    
    for item in search_list:
        media_type = item.get('media_type', media_type)
        if media_type != 'person':
            title_key = 'title' if media_type == 'movie' else 'name'
            date_key = 'release_date' if media_type == 'movie' else 'first_air_date'

            media = {}
            media['id'] = item['id']
            media[title_key] = item[title_key]
            media['overview'] = item['overview']
            media['poster_path'] = item['poster_path']
            media[date_key] = item[date_key]
            media['vote_average'] = item['vote_average']
            media['vote_count'] = item['vote_count']
            media['genre_ids'] = item['genre_ids']

            final_search_results.append(media)
    
    return final_search_results


# Search Movie Endpoint
@app.route("/search_movie", methods = ['GET'])
def search_movie():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    search_query = "avengers"
    endpoint_url = f'{tmdb_api_url}search/movie?api_key={tmdb_api_key}&query={search_query}&language=en-US&page=1&include_adult=false'

    response = requests.get(endpoint_url, headers = headers).json()
    movies = {'movies': extract_search_fields(response['results'], "movie")}
    
    return make_response(movies, 200)


# Search TV Endpoint
@app.route("/search_tv_shows", methods = ['GET'])
def search_tv_shows():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    search_query = "game%20of"
    endpoint_url = f'{tmdb_api_url}search/tv?api_key={tmdb_api_key}&language=en-US&page=1&query={search_query}&include_adult=false'

    response = requests.get(endpoint_url, headers = headers).json()
    tv_shows = {'tv_shows': extract_search_fields(response['results'], "tv")}

    return make_response(tv_shows, 200)


# Multi-Search Endpoint
@app.route("/multi_search", methods = ['GET'])
def mutisearch():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    search_query = "game%20of"
    endpoint_url = f'{tmdb_api_url}search/multi?api_key={tmdb_api_key}&language=en-US&query={search_query}&page=1&include_adult=false'

    response = requests.get(endpoint_url, headers = headers).json()
    movies_tv_shows = {'movies_tv_shows': extract_search_fields(response['results'], "")}
    
    return make_response(movies_tv_shows, 200)


# Get Movie Details Endpoint
@app.route("/movie_details", methods = ['GET'])
def get_movie_details():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    movie_id = 284052
    endpoint_url = f'{tmdb_api_url}movie/{movie_id}?api_key={tmdb_api_key}&language=en-US'

    response = requests.get(endpoint_url, headers = headers).json()
    movie_details = { 
        'id': response['id'],
        'title': response['title'],
        'runtime': response['runtime'],
        'release_date': response['release_date'],
        'spoken_languages': response['spoken_languages'],
        'vote_average': response['vote_average'],
        'vote_count': response['vote_count'],
        'poster_path': response['poster_path'],
        'backdrop_path': response['backdrop_path'],
        'genres': response['genres']
        }

    return make_response(movie_details, 200)


# Get Movie Credits Endpoint
@app.route("/movie_credits", methods = ['GET'])
def get_movie_credits():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    movie_id = 284052
    endpoint_url = f'{tmdb_api_url}movie/{movie_id}/credits?api_key={tmdb_api_key}&language=en-US'

    response = requests.get(endpoint_url, headers = headers).json()
    
    movie_actors = {'movie_actors': []}
    for item in response['cast'][:8]:
        movie_actors['movie_actors'].append({
            'name': item['name'], 
            'profile_path': item['profile_path'], 
            'character': item['character']
            })

    return make_response(movie_actors, 200)


# Get Movie Reviews Endpoint
@app.route("/movie_reviews", methods = ['GET'])
def get_movie_reviews():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    movie_id = 284052
    endpoint_url = f'{tmdb_api_url}movie/{movie_id}/reviews?api_key={tmdb_api_key}&language=en-US&page=1'
    response = requests.get(endpoint_url, headers = headers).json()
    
    movie_reviews = {'movie_reviews': []}
    for item in response['results'][:5]:
        movie_reviews['movie_reviews'].append({
            'username': item['author_details']['username'], 
            'content': item['content'], 
            'rating': item['author_details']['rating'],
            'created_at': item['created_at']
            })

    return make_response(movie_reviews, 200)


# Get TV Show Details Endpoint
@app.route("/tv_show_details", methods = ['GET'])
def get_tv_show_details():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    tv_show_id = 1399
    endpoint_url = f'{tmdb_api_url}tv/{tv_show_id}?api_key={tmdb_api_key}&language=en-US'
    response = requests.get(endpoint_url, headers = headers).json()
  
    tv_show_details = { 
        'backdrop_path': response['backdrop_path'],
        'episode_run_time': response['episode_run_time'],
        'first_air_date': response['first_air_date'],
        'genres': response['genres'],
        'id' : response['id'],
        'name' : response['name'],
        'number_of_seasons': response['number_of_seasons'],
        'overview': response['overview'],
        'poster_path': response['poster_path'],
        'spoken_languages': response['spoken_languages'],
        'vote_average': response['vote_average'],
        'vote_count': response['vote_count']
        }

    return make_response(tv_show_details, 200)


# Get TV Show Credits Endpoint
@app.route("/tv_show_credits", methods = ['GET'])
def get_tv_show_credits():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    tv_show_id = 1399
    endpoint_url = f'{tmdb_api_url}tv/{tv_show_id}/credits?api_key={tmdb_api_key}&language=en-US'

    response = requests.get(endpoint_url, headers = headers).json()
    
    tv_show_actors = {'tv_show_actors': []}
    for item in response['cast'][:8]:
        tv_show_actors['tv_show_actors'].append({
            'name': item['name'], 
            'profile_path': item['profile_path'], 
            'character': item['character']
            })

    return make_response(tv_show_actors, 200)


# Get TV Show Reviews Endpoint
@app.route("/tv_show_reviews", methods = ['GET'])
def get_tv_show_reviews():
    
    ##### SEARCH QUERY TO BE CHANGED #####
    tv_show_id = 1399
    endpoint_url = f'{tmdb_api_url}tv/{tv_show_id}/reviews?api_key={tmdb_api_key}&language=en-US&page=1'
    response = requests.get(endpoint_url, headers = headers).json()
    
    tv_show_reviews = {'tv_show_reviews': []}
    for item in response['results'][:5]:
        tv_show_reviews['tv_show_reviews'].append({
            'username': item['author_details']['username'], 
            'content': item['content'], 
            'rating': item['author_details']['rating'],
            'created_at': item['created_at']
            })

    return make_response(tv_show_reviews, 200)


# Movie Genres Endpoint
@app.route("/movie_genres", methods = ['GET'])
def get_movie_genres():
    
    endpoint_url = f'{tmdb_api_url}genre/movie/list?api_key={tmdb_api_key}&language=en-US'
    response = requests.get(endpoint_url, headers = headers).json()
    
    movie_genres = {'movie_genres': []}
    for item in response['genres']:
        movie_genres['movie_genres'].append({
            'id': str(item['id']), 
            'name': item['name']
            })

    return make_response(movie_genres, 200)

# TV Genres Endpoint
@app.route("/tv_genres", methods = ['GET'])
def get_tv_genres():
    
    endpoint_url = f'{tmdb_api_url}genre/tv/list?api_key={tmdb_api_key}&language=en-US'
    response = requests.get(endpoint_url, headers = headers).json()
    
    tv_genres = {'tv_genres': []}
    for item in response['genres']:
        tv_genres['tv_genres'].append({
            'id': str(item['id']), 
            'name': item['name']
            })

    return make_response(tv_genres, 200)

