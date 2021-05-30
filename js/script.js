$(document).ready(function () {

  var darkMode;

  if (localStorage.getItem('dark-mode')) {
    // if dark mode is in storage, set variable with that value
    darkMode = localStorage.getItem('dark-mode');
  } else {
    // if dark mode is not in storage, set variable to 'light'
    darkMode = 'light';
  }

  console.log(localStorage.getItem('dark-mode') == 'dark')
  // set new localStorage value
  localStorage.setItem('dark-mode', darkMode);


  if (localStorage.getItem('dark-mode') == 'dark') {
    // if the above is 'dark' then apply .dark to the body
    console.log("came")
    $('html').addClass('dark');
    // hide the 'dark' button
    $('.dark-button').hide();
    // show the 'light' button
    $('.light-button').show();
  }

  $('.dark-button').on('click', function () {
    $('.dark-button').hide();
    $('.light-button').show();
    $('html').addClass('dark');
    // set stored value to 'dark'
    localStorage.setItem('dark-mode', 'dark');
  });

  $('.light-button').on('click', function () {
    $('.light-button').hide();
    $('.dark-button').show();
    $('html').removeClass('dark');
    // set stored value to 'light'
    localStorage.setItem('dark-mode', 'light');
  });



  $('.menu-button').on('click', function () {
    let navitems2 =$('#navbar-items2')[0];

    if (navitems2.className == "navbar-items2") {
      navitems2.classList.add('responsive-dropdown');
    } else {
      navitems2.classList.remove('responsive-dropdown');
    }
  })

  $('.close-button').on('click', function () {
    let navitems2 =$('#navbar-items2')[0];
      navitems2.classList.remove('responsive-dropdown');
  
  })

})
