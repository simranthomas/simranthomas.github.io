var base_url_backdrop_path = "https://image.tmdb.org/t/p/w780/"
var base_url_poster_profile_path = "https://image.tmdb.org/t/p/w185/"

function initial_load()
{
    load_home_page();
    get_carousel_data();
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

function get_carousel_data()
{
    var request_movie = new XMLHttpRequest();
    request_movie.open("GET", "/trending_movies", true);
    request_movie.onreadystatechange = function() {
        if (request_movie.readyState == 4 && request_movie.status == 200) 
        {
            movie_list = JSON.parse(this.responseText).top_movies;
            generate_carousel(movie_list, "movie"); 
        }
    };
    request_movie.send(null);

    var request_tv_show = new XMLHttpRequest();
    request_tv_show.open("GET", "/tv_shows_airing_today", true);
    request_tv_show.onreadystatechange = function() {
        if (request_tv_show.readyState == 4 && request_tv_show.status == 200) 
        {
            tv_show_list = JSON.parse(this.responseText).top_tv_shows;
            generate_carousel(tv_show_list, "tv-show")
        }
    };
    request_tv_show.send(null);
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