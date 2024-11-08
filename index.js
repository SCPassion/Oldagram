const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 0
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 0
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 0
    }
]

function renderPosts(Posts) {
    let postHTML = defaultHTML;
    for (let i = 0; i < Posts.length; i++) {
        let postHTML = `       
            <section>
                <div class= "container">
                    <div class="flexbox">
                        <img class="avatar" src=${Posts[i].avatar}>
                        <div class="info-box">
                            <h1>${Posts[i].name}</h1>
                            <h2>${Posts[i].location}</h2>
                        </div>
                    </div>
                    <img class="draw-img" src=${Posts[i].post}>
                    <div class="flexbox">
                        <img class="icon-img" id="like${i}" src="images/icon-heart.png">
                        <img class="icon-img" src="images/icon-comment.png">
                        <img class="icon-img" src="images/icon-dm.png">
                    </div>
                    <p class="like-number" id="likeNum${i}">${Posts[i].likes} likes</p>
                    <p class="last-line"><span>${Posts[i].username}</span> ${Posts[i].comment}</p>
                </div>
            </section>`

        bodyEl.innerHTML += postHTML
    }
}

const bodyEl = document.getElementById("main-body")

const defaultHTML = bodyEl.innerHTML;

renderPosts(posts)

const likeEl0 = document.getElementById("like0")
const likeEl1 = document.getElementById("like1")
const likeEl2 = document.getElementById("like2")

likeEl0.addEventListener("click", function() {
    posts[0].likes++
    document.getElementById("likeNum0").textContent = posts[0].likes + " " + "likes"
})

likeEl1.addEventListener("click", function() {
    posts[1].likes++
    document.getElementById("likeNum1").textContent = posts[1].likes + " " + "likes"
})

likeEl2.addEventListener("click", function() {
    posts[2].likes++
    document.getElementById("likeNum2").textContent = posts[2].likes + " " + "likes"
})
