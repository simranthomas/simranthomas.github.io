var base_url_backdrop_path = "https://image.tmdb.org/t/p/w780"
var base_url_poster_profile_path = "https://image.tmdb.org/t/p/w185"


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
    document.getElementById("home-tab").style.borderBottom = "2px solid #828184";
    document.getElementById("search-text").style.color = "white";
    document.getElementById("home-text").style.color = "#A70012";
    document.getElementById("search-tab").style.borderBottom = "none";
}

function load_search_page()
{
    document.getElementById("search-page").style.display = "block";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("search-tab").style.borderBottom = "2px solid #828184";
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
        carousel_image.setAttribute("class", "backdrop-img");
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
                movie_genre_list = JSON.parse(this.responseText);
            else if (media_type == "tv-show") 
                tv_genre_list = JSON.parse(this.responseText);
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
    clear_search();

    main_result_box = document.getElementById("search-results");

    if(search_results.length == 0)
    {
        no_results_text = document.createTextNode("No results found.");
        no_results_div = document.createElement("div");
        no_results_div.setAttribute("id", "no-results");
        no_results_div.appendChild(no_results_text);
        main_result_box.appendChild(no_results_div);
        return;
    }

    showing_results_text = document.createTextNode("Showing results...");
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
        card_poster.setAttribute("class", "card-img");

        poster_img = new Image();
        poster_img.src = base_url_poster_profile_path + item.poster_path;
        card_poster.appendChild(poster_img);
        card.appendChild(card_poster);

        card_content = document.createElement("div");
        card_content.setAttribute("class", "card-content");

        title = document.createElement("div");
        title.setAttribute("class", "card-title");
        title_text = document.createTextNode(item.title);
        title.appendChild(title_text);
        card_content.appendChild(title);

        year_genre = document.createElement("div");
        year_genre.setAttribute("class", "card-item");
        year_genre_text = new Date(Date.parse(item.release_air_date)).getFullYear()

        genres = "";
        
        item.genre_ids.forEach(genre => {
            
            if(item.media_type == "movie")
                genres += movie_genre_list[genre] + ", ";
            else if(item.media_type == "tv-show")
                genres += tv_genre_list[genre] + ", ";
        });
        year_genre_text += " | " + genres.slice(0, -2);

        text_year = document.createTextNode(year_genre_text);
        year_genre.appendChild(text_year);
        card_content.appendChild(year_genre);

        rating_votes = document.createElement("div");
        rating_votes.setAttribute("class", "card-rating-votes");
        rating_votes_text = parseFloat((item.vote_average / 2).toFixed(2)) + "/5";
        text_rating = document.createTextNode("\u2605 " +rating_votes_text);
        rating_votes.appendChild(text_rating);

        votes = document.createElement("span");
        votes.setAttribute("class", "votes-text");
        votes.appendChild(document.createTextNode(item.vote_count.toString() + " votes"));
        rating_votes.appendChild(votes)
        card_content.appendChild(rating_votes);

        overview = document.createElement("div");
        overview.setAttribute("class", "card-item card-overview");
        overview_text = item.overview;
        text_overview = document.createTextNode(overview_text);
        overview.appendChild(text_overview);
        card_content.appendChild(overview);
 
        show_more_button = document.createElement("input");
        show_more_button.setAttribute("type", "button");
        show_more_button.setAttribute("class", "show-more-button");
        show_more_button.setAttribute("value", "Show More");
        show_more_button.setAttribute("onclick", "show_modal(" + item.id + ",'"+ item.media_type +"')");
        card_content.appendChild(show_more_button);

        card.appendChild(card_content);
        cards_container.appendChild(card);
    });
    main_result_box.appendChild(cards_container);
}

function clear_search()
{
    result = document.getElementById("showing-results");
    cards = document.getElementById("cards-container");
    no_result = document.getElementById("no-results");

    if (result != null)
        result.remove();
    if(cards != null)
        cards.remove();
    if(no_result != null)
        no_result.remove();
}

function clear_fields()
{
    document.getElementById("keyword").value = "";
    document.getElementById("categories").value = "";
}

function close_modal() 
{
    document.getElementById("details-modal").style.display = "none";
    document.getElementById("actors-grid").remove();
    document.getElementById("cards-reviews").remove();
}

window.onclick = function(event) {
    if (event.target ==  document.getElementById("details-modal"))
        close_modal();
}

function show_modal(media_id, media_type)
{
    document.getElementById("details-modal").style.display = "block";
    
    if(media_type == "movie")
    {
       get_media_details("movie_details", media_id);
       get_cast_details("movie_credits", media_id);
       get_review_details("movie_reviews", media_id);
    }
    else if(media_type == "tv-show")
    {
       get_media_details("tv_show_details", media_id);
       get_cast_details("tv_show_credits", media_id);
       get_review_details("tv_show_reviews", media_id);
    }
}

function get_media_details(endpoint, media_id)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/" + endpoint + "?media_id=" + media_id, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) 
        {
            media_details= JSON.parse(this.responseText);
            show_media_details(media_details);
        }
    };
    request.send(null);
}

function show_media_details(media_details)
{
    document.getElementById("media-details-img").src = base_url_backdrop_path + media_details.backdrop_path;
    document.getElementById("media-details-title").innerHTML = media_details.title;

    year_genre_text = new Date(Date.parse(media_details.release_air_date)).getFullYear()
    
    genres_text = "";
    media_details.genres.forEach(genre => {            
        genres_text += genre["name"] + ",";
    });
    document.getElementById("media-details-year-genre").innerHTML = year_genre_text += " | " + genres_text.slice(0, -1);;

    rating_votes_text = (media_details.vote_average / 2).toFixed(2).toString() + "/5  " + media_details.vote_count.toString();
    document.getElementById("media-details-rating-votes").innerHTML = rating_votes_text;

    document.getElementById("media-details-overview").innerHTML = media_details.overview;

    languages_text = "";
    media_details.spoken_languages.forEach(language => {          
        languages_text += language["english_name"] + ",";
    });
    document.getElementById("media-details-languages").innerHTML = languages_text.slice(0, -1);
}

function get_cast_details(endpoint, media_id)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/" + endpoint + "?media_id=" + media_id, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) 
        {
            cast_details= JSON.parse(this.responseText).actors;
            show_cast_details(cast_details);
        }
    };
    request.send(null);
}

function show_cast_details(cast_details_data)
{

    cast_container = document.getElementById("cast-container");

    cast_details_div= document.createElement("div");
    cast_details_div.setAttribute("class", "cast-grid");
    cast_details_div.setAttribute("id", "actors-grid");
    cast_container.appendChild(cast_details_div);

    cast_details_data.forEach(actor =>{

        actor_card = document.createElement("div");
        actor_card.setAttribute("class", "actor-card");
        
        actor_img_div = document.createElement("div");
        actor_img_div.setAttribute("class", "actor-img");
        actor_img = new Image();
        actor_img.src = base_url_poster_profile_path + actor.profile_path;
        actor_img_div.appendChild(actor_img);
        actor_card.appendChild(actor_img_div);

        actor_profile_div = document.createElement("div");
        actor_profile_div.setAttribute("class", "actor-profile");
        actor_card.appendChild(actor_profile_div);

        actor_name_div = document.createElement("div");
        actor_name_div.setAttribute("class", "actor-name");
        actor_name_div.appendChild(document.createTextNode(actor.name));
        actor_profile_div.appendChild(actor_name_div);

        as_div = document.createElement("div");
        as_div.appendChild(document.createTextNode("AS"));
        actor_profile_div.appendChild(as_div);

        character_name_div = document.createElement("div");
        character_name_div.setAttribute("class", "character-name");
        character_name_div.appendChild(document.createTextNode(actor.character));
        actor_profile_div.appendChild(character_name_div);
        
        cast_details_div.appendChild(actor_card);

    });
}

function get_review_details(endpoint, media_id)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/" + endpoint + "?media_id=" + media_id, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) 
        {
            review_details= JSON.parse(this.responseText).reviews;
            show_review_details(review_details);
        }
    };
    request.send(null);
}

function show_review_details(review_details_data)
{
    reviews_container = document.getElementById("reviews-container");

    review_cards_div= document.createElement("div");
    review_cards_div.setAttribute("class", "reviews-cards");
    review_cards_div.setAttribute("id", "cards-reviews");
    reviews_container.appendChild(review_cards_div);

    review_details_data.forEach(review =>{

        review_card = document.createElement("div");
        review_card.setAttribute("class", "review-card");

        var date = new Date(review.created_at);
        user_date_text = document.createTextNode(review.username + " on " + date.toLocaleDateString());
        user_date = document.createElement("div");
        user_date.setAttribute("class", "user-date");
        user_date.appendChild(user_date_text);
        review_card.appendChild(user_date);

        review_rating = document.createElement("div");
        review_rating.setAttribute("class", "review-rating");
        review_rating_text = document.createTextNode((review.rating / 2).toFixed(2));
        review_rating.appendChild(review_rating_text);
        review_card.appendChild(review_rating);

        review_content = document.createElement("div");
        review_content.setAttribute("class", "review-content");
        review_content_text = document.createTextNode(review.content);
        review_content.appendChild(review_content_text);
        review_card.appendChild(review_content);

        review_card.appendChild(document.createElement("hr"));
        review_cards_div.appendChild(review_card);
    });

}

