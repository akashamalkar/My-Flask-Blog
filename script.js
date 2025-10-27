// Add smooth transition when clicking posts
function openPost(id) {
    document.body.style.opacity = 0.5;
    setTimeout(() => {
        window.location.href = `/post/${id}`;
    }, 200);
}
