//This file could coordinate between the API and the rendering logic. It would fetch posts from API.js and then use Post.js to render them. It might also handle user interactions like liking posts, commenting, or sharing.

import API from "../api.js";
import Post from "./post.js";

// Variables...

const postTitles = document.querySelectorAll('#post-title');

// Get the sidebar and the toggle button
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

const postContainer = document.getElementById('post-template');
const singlePost = document.getElementById('single-post');
const postTem = document.getElementById('post-template');
const postStories = document.getElementById('post-stories');
const postSearch = document.getElementById('post-search');
const logout = document.getElementById('logout-btn');


const elementsToHide = [postTem, postStories, postSearch];

// Function to hide elements...
function hideElements() {
    elementsToHide.forEach(function(element) {
        element.style.display = 'none';
    })
}


// Function to hide||show side-bar...
function showHideSibar() {
    sidebarToggle.addEventListener('click', function (e) {
        sidebar.classList.toggle('hidden');

        sidebarToggle.classList.toggle("fa-bars");
        sidebarToggle.classList.toggle("fa-xmark");
        
    })
}


// Function to fetch posts from API and render post with user information(fetch user also)...

function fetchPostsAndRender() {
    Promise.all([API.fetchPosts(), API.fetchUsers()])
        .then(([postData, userData]) => {
            const posts = postData.posts;
            const users = userData.users;

            if (posts && Array.isArray(posts) && users && Array.isArray(users)) {
                // Get user data for the current post
                posts.forEach(post => {
                    const user = users.find(user => user.id === post.userId);

                    if (user) {

                         // Limit the post body content
                         const limitedContent = limitPostContent(post.body, 50);
                         const limitedPost = { ...post, body: limitedContent };

                         // Create a new instance of the Post class
                         const postInstance = new Post(limitedPost, user);
 
                         const postElement = postInstance.render();
                        //  showSinglePost();

                        if (postElement) {
                            postContainer.appendChild(postElement);
                        } else {
                            console.log('Error: rendering post.❌')
                        } 
                    } else {
                        console.error('User not found for post.❌')
                    }
                })
            } else {
                console.error('Invalid data: posts or users is missing or not an array.')
            }
        })
        .catch (err => console.error(err));
}

// Function to Limit the post content body...

function limitPostContent(content, maxWords) {
    // split content into words..
    const words = content.split(' ');

    // check if already maxWords exist..
    if (words.length <= maxWords) {
        return content;
    }

    // limit content to specified number of words..
    const limitContent = words.splice(0, maxWords).join(' ') + '...';

    return limitContent;
}


// Function to fetch single post data and render...

function fetchSinglePost(postId) {
    API.fetchSinglePost(postId) 
    .then(postData => {
        return postData;
    })
    .catch(error => 
        console.error('Error fetching post.❌',error))
}

// Function to show single post...

function showSinglePost() {
    const postContainer = document.getElementById('post-template');
    console.log('🤯🤯🤯', postContainer)

postContainer.addEventListener('click', function(e) {
    console.log('🤯🤯🤯', e)
    const postCard = e.target.closest('.post-card');
    if (postCard) {
        const postTitle = postCard.querySelector('.post-title').textContent;
        const postTags = postCard.querySelector('.post-tags').textContent;
        const postBody = postCard.querySelector('.post-body').textContent;

        // Now you have the post title, tags, and body. You can use this data to display the single post page.
        console.log("Post Title:", postTitle);
        console.log("Post Tags:", postTags);
        console.log("Post Body:", postBody);
        
    } else {
        console.log('There is no data set id❌❌')
    }
})

}

// Function to logout...

function userLogout() {
    logout.addEventListener('click', function (e) {
        localStorage.removeItem('token');
        alert('User logout😃😃');
        window.location.replace('../index.html')
    })
}




document.addEventListener('DOMContentLoaded', function () {
    fetchPostsAndRender();
    showSinglePost();
    fetchSinglePost(2);
    showHideSibar();
    userLogout();
})