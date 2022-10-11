import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js";
function init(){
    $('#wd-explore').append(`
<div class="container pt-1">
    <div class="d-none d-xxl-block">
        <h1>Explore</h1>
        <h1>XXL</h1>
        <div class="row">
            <div class="col-2">
                ${NavigationSidebar()}
            </div> 
            <div class="col-6">
                ${ExploreComponent()}
            </div> 
            <div class="col-4">
               ${WhoToFollowList()}
            </div> 
        </div>
    </div>

    <div class="d-none d-xl-block d-xxl-none">
        <h1>Explore</h1>
        <h1>XL</h1>
        <div class="row">
            <div class="col-2">
                <ul class="list-group">

                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-home"></i>
                        Home
                    </li>
                    <li class="list-group-item active">
                        <i class="fas fa-hashtag"></i>
                        Explore
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bell"></i>
                        Notifications
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-envelope"></i>
                        Messages
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bookmark"></i>
                        Bookmarks
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-list"></i>
                        Lists
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-user"></i>
                        Profile
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-splotch"></i>
                        More
                    </li>

                </ul>
                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                    Tuit
                </button>


            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-11 position-relative">
                        <input  class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wb-search-tuiter-position">
                        <i class="fas fa-search"></i>
                            </i></span>
                    </div>
                    <div class="col-1">
                        <a href="explore-settings.html" class="wb-gear-setting">
                            <i class="fas fa-cog"></i>
                        </a>
                    </div>
                </div>

                <ul class="nav nav-tabs mt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                    </li>
                </ul>
                <div class="position-relative">
                    <img src="starship.jpeg" class="img-fluid">
                    <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
                </div>

                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        ReactJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>

                                <div class="fw-bolder">
                                    React.js is a component based front end library that makes it very easy to build
                                    Single Page Applications or SPAs
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="react.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        JavaScript
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="fw-bolder">
                                    JavaScript is programming language that can run on browsers as well as desktops
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="JavaScript-logo.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        jQuery
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="jquery.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        NodeJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="nodejs.png" width="100%" >
                            </div>
                        </div>
                    </li>
                </ul>


            </div>
            <div class="col-4">
                <ul class="list-group override-size">
                    <li class="list-group-item">
                        who to follow
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="Java.jpeg">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Java
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @Java
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="relativityspace.webp">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Relativity Space
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @relativityspace
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="virgin.svg">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Virgin Galactic
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @virgingalactic
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="nasa.png">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    NASA
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @NASA
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="tesla.jpeg">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Tesla
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @Tesla
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    </div>

    <div class="d-none d-lg-block d-xl-none">
        <h1>Explore</h1>
        <h1>L</h1>
        <div class="row">
            <div class="col-1">
                <ul class="list-group">

                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-home"></i>
                        <div class="visually-hidden">
                            Home
                        </div>

                    </li>
                    <li class="list-group-item active">
                        <i class="fas fa-hashtag"></i>
                        <div class="visually-hidden">
                            Explore
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bell"></i>
                        <div class="visually-hidden">
                            Notifications
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-envelope"></i>
                        <div class="visually-hidden">
                            Messages
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bookmark"></i>
                        <div class="visually-hidden">
                            Bookmarks
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-list"></i>
                        <div class="visually-hidden">
                            Lists
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-user"></i>
                        <div class="visually-hidden">
                            Profile
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-splotch"></i>
                        <div class="visually-hidden">
                            More
                        </div>
                    </li>

                </ul>
                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                    Tuit
                </button>


            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-11 position-relative">
                        <input  class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wb-search-tuiter-position">
                        <i class="fas fa-search"></i>
                            </i></span>
                    </div>
                    <div class="col-1">
                        <a href="explore-settings.html" class="wb-gear-setting">
                            <i class="fas fa-cog"></i>
                        </a>
                    </div>
                </div>

                <ul class="nav nav-tabs mt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                    </li>
                </ul>
                <div class="position-relative">
                    <img src="starship.jpeg" class="img-fluid">
                    <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
                </div>

                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        ReactJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>

                                <div class="fw-bolder">
                                    React.js is a component based front end library that makes it very easy to build
                                    Single Page Applications or SPAs
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="react.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        JavaScript
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="fw-bolder">
                                    JavaScript is programming language that can run on browsers as well as desktops
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="JavaScript-logo.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        jQuery
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="jquery.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        NodeJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="nodejs.png" width="100%" >
                            </div>
                        </div>
                    </li>
                </ul>


            </div>
            <div class="col-4">
                <ul class="list-group">
                    <li class="list-group-item">
                        who to follow
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="Java.jpeg">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Java
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @Java
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="relativityspace.webp">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Relativity Space
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @relativityspace
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="virgin.svg">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Virgin Galactic
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @virgingalactic
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="nasa.png">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    NASA
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @NASA
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle img-fluid" src="tesla.jpeg">
                            </div>
                            <div class="col-5">
                                <div class="fw-bolder">
                                    Tesla
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    @Tesla
                                </div>
                            </div>
                            <div class="col-4">
                                <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </botton>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    </div>

    <div class="d-none d-md-block d-lg-none">
        <h1>Explore</h1>
        <h1>M</h1>
        <div class="row">
            <div class="col-2">
                <ul class="list-group">

                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-home"></i>
                        <div class="visually-hidden">
                            Home
                        </div>

                    </li>
                    <li class="list-group-item active">
                        <i class="fas fa-hashtag"></i>
                        <div class="visually-hidden">
                            Explore
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bell"></i>
                        <div class="visually-hidden">
                            Notifications
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-envelope"></i>
                        <div class="visually-hidden">
                            Messages
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bookmark"></i>
                        <div class="visually-hidden">
                            Bookmarks
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-list"></i>
                        <div class="visually-hidden">
                            Lists
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-user"></i>
                        <div class="visually-hidden">
                            Profile
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-splotch"></i>
                        <div class="visually-hidden">
                            More
                        </div>
                    </li>

                </ul>
                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                    Tuit
                </button>


            </div>
            <div class="col-10">
                <div class="row">
                    <div class="col-11 position-relative">
                        <input  class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wb-search-tuiter-position">
                        <i class="fas fa-search"></i>
                            </i></span>
                    </div>
                    <div class="col-1">
                        <a href="explore-settings.html" class="wb-gear-setting"><i class="fas fa-cog"></i></a>
                    </div>
                </div>

                <ul class="nav nav-tabs mt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                    </li>
                </ul>
                <div class="position-relative">
                    <img src="starship.jpeg" class="img-fluid">
                    <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
                </div>

                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        ReactJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>

                                <div class="fw-bolder">
                                    React.js is a component based front end library that makes it very easy to build
                                    Single Page Applications or SPAs
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="react.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        JavaScript
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="fw-bolder">
                                    JavaScript is programming language that can run on browsers as well as desktops
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="JavaScript-logo.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        jQuery
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="jquery.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        NodeJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="nodejs.png" width="100%" >
                            </div>
                        </div>
                    </li>
                </ul>


            </div>
            <div class="visually-hidden">
                <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item">
                            who to follow
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="Java.jpeg">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Java
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @Java
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="relativityspace.webp">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Relativity Space
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @relativityspace
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="virgin.svg">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Virgin Galactic
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @virgingalactic
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="nasa.png">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        NASA
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @NASA
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="tesla.jpeg">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Tesla
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @Tesla
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    </div>

    <div class="d-none d-sm-block d-md-none">
        <h1>Explore</h1>
        <h1>S</h1>
        <div class="row">
            <div class="col-2">
                <ul class="list-group">

                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-home"></i>
                        <div class="visually-hidden">
                            Home
                        </div>

                    </li>
                    <li class="list-group-item active">
                        <i class="fas fa-hashtag"></i>
                        <div class="visually-hidden">
                            Explore
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bell"></i>
                        <div class="visually-hidden">
                            Notifications
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-envelope"></i>
                        <div class="visually-hidden">
                            Messages
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-bookmark"></i>
                        <div class="visually-hidden">
                            Bookmarks
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-list"></i>
                        <div class="visually-hidden">
                            Lists
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-user"></i>
                        <div class="visually-hidden">
                            Profile
                        </div>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-splotch"></i>
                        <div class="visually-hidden">
                            More
                        </div>
                    </li>

                </ul>
                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                    Tuit
                </button>


            </div>
            <div class="col-10">
                <div class="row">
                    <div class="col-11 position-relative">
                        <input  class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wb-search-tuiter-position">
                        <i class="fas fa-search"></i>
                            </i></span>
                    </div>
                    <div class="col-1">
                        <a href="explore-settings.html" class="wb-gear-setting"><i class="fas fa-cog"></i></a>
                    </div>
                </div>

                <ul class="nav nav-tabs mt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Sports</a>
                    </li>
                    <div class="visually-hidden">
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                        </li>
                    </div>
                </ul>
                <div class="position-relative">
                    <img src="starship.jpeg" class="img-fluid">
                    <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
                </div>

                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        ReactJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>

                                <div class="fw-bolder">
                                    React.js is a component based front end library that makes it very easy to build
                                    Single Page Applications or SPAs
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="react.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        JavaScript
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="fw-bolder">
                                    JavaScript is programming language that can run on browsers as well as desktops
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="JavaScript-logo.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        jQuery
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="jquery.png" width="100%" >
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="row">
                                    <div class="col-3 fw-bolder">
                                        NodeJS
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div class="col-2 text-secondary">
                                        - 2h
                                    </div>
                                </div>
                                <div class="text-secondary">
                                    123K Tuits
                                </div>
                            </div>
                            <div class="col-2 ">
                                <img src="nodejs.png" width="100%" >
                            </div>
                        </div>
                    </li>
                </ul>


            </div>
            <div class="visually-hidden">
                <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item">
                            who to follow
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="Java.jpeg">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Java
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @Java
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="relativityspace.webp">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Relativity Space
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @relativityspace
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="virgin.svg">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Virgin Galactic
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @virgingalactic
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="nasa.png">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        NASA
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @NASA
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-3">
                                    <img class="rounded-circle img-fluid" src="tesla.jpeg">
                                </div>
                                <div class="col-5">
                                    <div class="fw-bolder">
                                        Tesla
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        @Tesla
                                    </div>
                                </div>
                                <div class="col-4">
                                    <botton class="btn btn-primary w-100 mt-1 rounded-pill">
                                        Follow
                                    </botton>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    </div>





</div>
    `);

}
$(init)