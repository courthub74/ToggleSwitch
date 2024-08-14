// Query the section
let page_ = document.querySelector('section');

// Query the toggle button
let toggle_button = document.getElementById('toggle_input');

// Onclick for toggle
toggle_button.addEventListener('change', function(){
    // console.log(page_);
    // Change the page class to dark_mode
    page_.classList.toggle('dark_mode');
});

