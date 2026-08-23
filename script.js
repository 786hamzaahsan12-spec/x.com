// =====================================================
// AI AGENT + CHAT AGENT
// =====================================================

const aiAgentBtn = document.getElementById("aiAgentBtn");
const chatAgentBtn = document.getElementById("chatAgentBtn");

const aiPanel = document.getElementById("aiPanel");
const chatPanel = document.getElementById("chatPanel");

const closeAi = document.getElementById("closeAi");
const closeChat = document.getElementById("closeChat");


// AI OPEN
if (aiAgentBtn && aiPanel) {
    aiAgentBtn.addEventListener("click", () => {
        aiPanel.classList.toggle("hidden");

        if (chatPanel) {
            chatPanel.classList.add("hidden");
        }
    });
}


// CHAT OPEN
if (chatAgentBtn && chatPanel) {
    chatAgentBtn.addEventListener("click", () => {
        chatPanel.classList.toggle("hidden");

        if (aiPanel) {
            aiPanel.classList.add("hidden");
        }
    });
}


// CLOSE AI
if (closeAi && aiPanel) {
    closeAi.addEventListener("click", () => {
        aiPanel.classList.add("hidden");
    });
}


// CLOSE CHAT
if (closeChat && chatPanel) {
    closeChat.addEventListener("click", () => {
        chatPanel.classList.add("hidden");
    });
}



// =====================================================
// AI CHAT
// =====================================================

const aiInput = document.getElementById("aiInput");
const aiSend = document.getElementById("aiSend");
const aiMessages = document.getElementById("aiMessages");


function sendAI() {

    if (!aiInput || !aiMessages) return;

    const message = aiInput.value.trim();

    if (message === "") return;


    // USER MESSAGE
    const userMessage = document.createElement("div");

    userMessage.className =
        "bg-[#1d9bf0] text-white rounded-[15px] p-3 text-[14px] ml-auto w-fit max-w-[80%]";

    userMessage.textContent = message;

    aiMessages.appendChild(userMessage);

    aiInput.value = "";

    aiMessages.scrollTop = aiMessages.scrollHeight;


    // AI RESPONSE
    setTimeout(() => {

        const aiMessage = document.createElement("div");

        aiMessage.className =
            "bg-[#16181c] text-white rounded-[15px] p-3 text-[14px] w-fit max-w-[80%]";

        aiMessage.textContent =
                       "Hello my name is Hamza.This is my AI Agent Your message was received successfully. Thanks to use my Agent";


        aiMessages.appendChild(aiMessage);

        aiMessages.scrollTop = aiMessages.scrollHeight;

    }, 500);
}


if (aiSend) {
    aiSend.addEventListener("click", sendAI);
}


if (aiInput) {
    aiInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            sendAI();
        }

    });
}



// =====================================================
// NORMAL CHAT
// =====================================================

const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");


function sendChat() {

    if (!chatInput || !chatMessages) return;

    const message = chatInput.value.trim();

    if (message === "") return;


    const userMessage = document.createElement("div");

    userMessage.className =
        "bg-[#1d9bf0] text-white rounded-[15px] p-3 text-[14px] ml-auto w-fit max-w-[80%]";

    userMessage.textContent = message;

    chatMessages.appendChild(userMessage);

    chatInput.value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


if (chatSend) {
    chatSend.addEventListener("click", sendChat);
}


if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            sendChat();
        }

    });
}



// =====================================================
// POST
// =====================================================

const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const showPosts = document.getElementById("showPosts");


if (postInput && postBtn) {

    postInput.addEventListener("input", () => {

        if (postInput.value.trim() !== "") {

            postBtn.classList.remove("bg-[#3b3b3b]");

            postBtn.classList.add(
                "bg-white",
                "hover:bg-[#e6e6e6]",
                "text-black"
            );

        } else {

            postBtn.classList.remove(
                "bg-white",
                "hover:bg-[#e6e6e6]",
                "text-black"
            );

            postBtn.classList.add("bg-[#3b3b3b]");
        }

    });


    postBtn.addEventListener("click", () => {

        const text = postInput.value.trim();

        if (text === "") return;

        console.log("New Post:", text);

        postInput.value = "";

        postBtn.classList.remove(
            "bg-white",
            "hover:bg-[#e6e6e6]",
            "text-black"
        );

        postBtn.classList.add("bg-[#3b3b3b]");

    });

}


if (showPosts) {

    showPosts.addEventListener("click", () => {

        showPosts.textContent = "Loading posts...";

        setTimeout(() => {

            showPosts.textContent = "Show 104 posts";

        }, 700);

    });

}



// =====================================================
// NUMBER FORMAT
// =====================================================

function formatCount(number) {

    if (number >= 1000000) {

        return (
            number / 1000000
        )
        .toFixed(1)
        .replace(".0", "") + "M";

    }


    if (number >= 1000) {

        return (
            number / 1000
        )
        .toFixed(1)
        .replace(".0", "") + "K";

    }


    return number.toString();
}



// =====================================================
// POST COMMENT
// =====================================================

const commentBtn = document.getElementById("commentBtn");
const commentCount = document.getElementById("commentCount");

let comments = 184;


if (commentBtn) {

    commentBtn.addEventListener("click", () => {

        comments++;

        if (commentCount) {
            commentCount.textContent =
                formatCount(comments);
        }

    });

}



// =====================================================
// POST LIKE
// =====================================================

const likeBtn = document.getElementById("likeBtn");
const heartIcon = document.getElementById("heartIcon");
const likeCount = document.getElementById("likeCount");

let likes = 9100;
let liked = false;


if (likeBtn) {

    likeBtn.addEventListener("click", () => {

        liked = !liked;


        if (liked) {

            likes++;

            likeBtn.classList.remove(
                "text-[#71767b]"
            );

            likeBtn.classList.add(
                "text-[#f91880]"
            );


            if (heartIcon) {

                heartIcon.classList.remove(
                    "fill-none"
                );

                heartIcon.classList.add(
                    "fill-current"
                );

            }

        } else {

            likes--;

            likeBtn.classList.remove(
                "text-[#f91880]"
            );

            likeBtn.classList.add(
                "text-[#71767b]"
            );


            if (heartIcon) {

                heartIcon.classList.remove(
                    "fill-current"
                );

                heartIcon.classList.add(
                    "fill-none"
                );

            }

        }


        if (likeCount) {

            likeCount.textContent =
                formatCount(likes);

        }

    });

}



// =====================================================
// REPOST
// =====================================================

const repostBtn = document.getElementById("repostBtn");
const repostCount = document.getElementById("repostCount");

let reposts = 694;
let reposted = false;


if (repostBtn) {

    repostBtn.addEventListener("click", () => {

        reposted = !reposted;


        if (reposted) {

            reposts++;

            repostBtn.classList.remove(
                "text-[#71767b]"
            );

            repostBtn.classList.add(
                "text-[#00ba7c]"
            );

        } else {

            reposts--;

            repostBtn.classList.remove(
                "text-[#00ba7c]"
            );

            repostBtn.classList.add(
                "text-[#71767b]"
            );

        }


        if (repostCount) {

            repostCount.textContent =
                formatCount(reposts);

        }

    });

}



// =====================================================
// BOOKMARK
// =====================================================

const bookmarkBtn = document.getElementById("bookmarkBtn");
const bookmarkIcon = document.getElementById("bookmarkIcon");

let bookmarked = false;


if (bookmarkBtn) {

    bookmarkBtn.addEventListener("click", () => {

        bookmarked = !bookmarked;


        if (bookmarked) {

            bookmarkBtn.classList.add(
                "text-[#1d9bf0]"
            );


            if (bookmarkIcon) {

                bookmarkIcon.classList.remove(
                    "fill-none"
                );

                bookmarkIcon.classList.add(
                    "fill-current"
                );

            }

        } else {

            bookmarkBtn.classList.remove(
                "text-[#1d9bf0]"
            );


            if (bookmarkIcon) {

                bookmarkIcon.classList.remove(
                    "fill-current"
                );

                bookmarkIcon.classList.add(
                    "fill-none"
                );

            }

        }

    });

}



// =====================================================
// SHARE
// =====================================================

const shareBtn = document.getElementById("shareBtn");


if (shareBtn) {

    shareBtn.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert("Post link copied!");

        } catch (error) {

            alert("Share button clicked!");

        }

    });

}


// =====================================================
// VIDEO
// =====================================================

const video = document.getElementById("postVideo");
const videoBox = document.getElementById("videoBox");

if (video) {

    // VIDEO SIZE
    video.addEventListener("loadedmetadata", () => {

        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        console.log("Video Width:", videoWidth);
        console.log("Video Height:", videoHeight);

        if (!videoHeight) return;

        const ratio = videoWidth / videoHeight;

        if (videoBox) {

            // PORTRAIT
            if (ratio < 1) {

                videoBox.classList.remove(
                    "max-w-[600px]"
                );

                videoBox.classList.add(
                    "max-w-[300px]"
                );

            }

            // LANDSCAPE
            else {

                videoBox.classList.remove(
                    "max-w-[300px]"
                );

                videoBox.classList.add(
                    "max-w-[600px]"
                );

            }

        }

        video.classList.add("object-contain");

    });


    // VIDEO PLAY / PAUSE BY CLICK
    video.addEventListener("click", () => {

        if (video.paused) {

            video.play();

        } else {

            video.pause();

        }

    });


    // =====================================================
    // AUTO PLAY / PAUSE ON SCROLL
    // =====================================================

    const videoObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    // Video screen par aa gaya
                    video.play().catch(() => {
                        // Browser autoplay ko block kare
                    });

                } else {

                    // Video screen se bahar chala gaya
                    video.pause();

                }

            });

        },
        {
            threshold: 0.6
        }
    );


    videoObserver.observe(video);

}
