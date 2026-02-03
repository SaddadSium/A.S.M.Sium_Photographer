// ================= LIGHTBOX FUNCTIONALITY =================

// ছবি ওপেন করার ফাংশন
function openLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightbox.style.display = "block";
    // যে ছবিতে ক্লিক করা হয়েছে তার সোর্স (src) নিয়ে পপ-আপে বসানো
    lightboxImg.src = element.src;
}

// ছবি ক্লোজ করার ফাংশন
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// কীবোর্ডের 'Esc' বাটন চাপলে লাইটবক্স বন্ধ হবে
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});