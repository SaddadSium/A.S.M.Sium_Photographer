// Run the filter function once the DOM is fully loaded to show 'all' by default
document.addEventListener("DOMContentLoaded", function() {
    filterSelection("all");
});

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("album-card");
    
    // 1. Loop through all album cards
    for (i = 0; i < x.length; i++) {
        // If "all" is selected, show everything
        if (c == "all") {
            removeClass(x[i], "hide");
            addClass(x[i], "show");
        } else {
            // Check if the card's category matches the button clicked
            if (x[i].getAttribute("data-category") === c) {
                removeClass(x[i], "hide");
                addClass(x[i], "show");
            } else {
                // Hide unmatched items
                removeClass(x[i], "show");
                addClass(x[i], "hide");
            }
        }
    }
}

// Helper function to add a class
function addClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Helper function to remove a class
function removeClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add 'active' class to the current button (highlighting)
var btnContainer = document.querySelector(".filter-container");
if (btnContainer) {
    var btns = btnContainer.getElementsByClassName("filter-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}