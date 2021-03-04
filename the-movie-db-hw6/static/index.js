var base_url_backdrop_path = "https://image.tmdb.org/t/p/w780/"
var base_url_poster_profile_path = "https://image.tmdb.org/t/p/w185/"


function initial_load()
{
    load_home_page();
    get_carousel_data("trending_movies", "movie");
    get_carousel_data("tv_shows_airing_today", "tv-show");
    get_genres("movie_genres", "movie");
    get_genres("tv_genres", "tv-show");
}

function load_home_page()
{
    document.getElementById("search-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
    document.getElementById("home-tab").style.borderBottom = "1px solid white";
    document.getElementById("search-text").style.color = "white";
    document.getElementById("home-text").style.color = "#A70012";
    document.getElementById("search-tab").style.borderBottom = "none";
}

function load_search_page()
{
    document.getElementById("search-page").style.display = "block";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("search-tab").style.borderBottom = "1px solid white";
    document.getElementById("search-text").style.color = "#A70012";
    document.getElementById("home-text").style.color = "white";
    document.getElementById("home-tab").style.borderBottom = "none";
}

function get_carousel_data(endpoint, media_type)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/" + endpoint, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) 
        {
            media_list = JSON.parse(this.responseText).top;
            generate_carousel(media_list, media_type); 
        }
    };
    request.send(null);
}

function generate_carousel(item_list, media_type)
{
    carousel_div = document.getElementById(media_type + "-carousel");

    item_list.forEach(item => 
    {
        // create main div element for img and caption
        carousel_element = document.createElement("div");
        carousel_element.className = "trending-" + media_type + " fade";

        // create image tag
        carousel_image = new Image();
        carousel_image.src = base_url_backdrop_path + item.backdrop_path;
        carousel_element.appendChild(carousel_image);

        // create caption tag
        carousel_caption_div = document.createElement("div");
        carousel_caption_div.className = "caption-text";
        text = document.createTextNode(item.title + " (" + new Date(Date.parse(item.release_air_date)).getFullYear() +")");
        carousel_caption_div.appendChild(text);
        carousel_element.appendChild(carousel_caption_div)

        carousel_div.appendChild(carousel_element);
    });
    if(media_type == "movie")
        display_carousel_movie();
    else 
        display_carousel_tv_show();
}


var slide_index_movie = 0;
var slide_index_tv_show = 0;

function display_carousel_movie() {
    var i;
    var slides = document.getElementsByClassName("trending-movie");

    for (i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";  

    slide_index_movie++;
    if (slide_index_movie > slides.length) 
        slide_index_movie = 1  
    slides[slide_index_movie-1].style.display = "block";  
    setTimeout(display_carousel_movie, 5000);
}

var movie_genre_list = {}
var tv_genre_list = {}

function display_carousel_tv_show() {
    var i;
    var slides = document.getElementsByClassName("trending-tv-show");

    for (i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";  

    slide_index_tv_show++;
    if (slide_index_tv_show > slides.length)
        slide_index_tv_show = 1
    slides[slide_index_tv_show-1].style.display = "block";  
    setTimeout(display_carousel_tv_show, 5000);
}

function get_genres(endpoint, media_type)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/" + endpoint, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) 
        {
            if (media_type == "movie")
            {
                genre_list = JSON.parse(this.responseText).genres;
                genre_list.forEach(item =>{
                    movie_genre_list[item.id] = item.name;
                });
            }
            else if (media_type == "tv-show") 
            {
                genre_list = JSON.parse(this.responseText).genres;
                genre_list.forEach(item =>{
                    tv_genre_list[item.id] = item.name;
                });
            }
        }
    };
    request.send(null);
}

function get_form_data()
{
    var keyword = document.getElementById("keyword").value;
    var category = document.getElementById("categories").value;

    if(keyword == "" || category == "")
        alert("Please enter valid values.")  

    else
    {
        if (category == "movies")
            get_search_data("search_movie", keyword);
        else if (category == "tv_shows")
            get_search_data("search_tv_shows", keyword);
        else if (category == "movies_tv_shows")
            get_search_data("multi_search", keyword);
    }
}

function get_search_data(endpoint, keyword)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/" + endpoint + "?keyword=" + keyword, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) 
        {
            search_results = JSON.parse(this.responseText).search_results;
            display_search_results(search_results.slice(0,10));
        }
    };
    request.send(null);
}

function display_search_results(search_results)
{
    main_result_box = document.getElementById("search-results");

    showing_results_text = document.createTextNode("Showing Results");
    showing_results_div = document.createElement("div");
    showing_results_div.setAttribute("id", "showing-results");
    showing_results_div.appendChild(showing_results_text);
    main_result_box.appendChild(showing_results_div);

    cards_container = document.createElement("div");
    cards_container.setAttribute("id", "cards-container")

    search_results.forEach(item => {
        
        card = document.createElement("div");
        card.setAttribute("class", "card");

        card_poster = document.createElement("div");
        card_poster.setAttribute("class", "card-item");

        poster_img = new Image();
        poster_img.src = base_url_poster_profile_path + item.poster_path;
        card_poster.appendChild(poster_img);
        card.appendChild(card_poster);

        card_content = document.createElement("div");
        card_content.setAttribute("class", "card-item card-content");

        title = document.createElement("div");
        title.setAttribute("class", "card-item card-content");
        title_text = document.createTextNode(item.title);
        title.appendChild(title_text);
        card_content.appendChild(title);

        year_genre = document.createElement("div");
        year_genre.setAttribute("class", "card-item card-content");
        year_genre_text = new Date(Date.parse(item.release_air_date)).getFullYear()

        genres = "";
        genre_list = 
        item.genre_ids.forEach(genre => {

            if(item.media_type == "movie")
                genres += movie_genre_list[genre] + ",";
            else if(item.edia_type == "tv")
            genres += tv_genre_list[genre] + ",";
        });
        year_genre_text += " | " + genres.slice(0, -1);

        text_year = document.createTextNode(year_genre_text);
        year_genre.appendChild(text_year);
        card_content.appendChild(year_genre);

        rating_votes = document.createElement("div");
        rating_votes.setAttribute("class", "card-item card-content");
        rating_votes_text = (item.vote_average / 2).toFixed(2).toString() + "/5  " + item.vote_count.toString();
        text_rating = document.createTextNode(rating_votes_text);
        rating_votes.appendChild(text_rating);
        card_content.appendChild(rating_votes);

        overview = document.createElement("div");
        overview.setAttribute("class", "card-item card-content");
        overview_text = item.overview;
        text_overview = document.createTextNode(overview_text);
        overview.appendChild(text_overview);
        card_content.appendChild(overview);
 
        show_more_button = document.createElement("input");
        show_more_button.setAttribute("type", "button");
        show_more_button.setAttribute("class", "show-more-button");
        show_more_button.setAttribute("value", "Show More");
        card_content.appendChild(show_more_button);

        card.appendChild(card_content);
        cards_container.appendChild(card);
    });
    main_result_box.appendChild(cards_container);
}