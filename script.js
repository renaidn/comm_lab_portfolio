let leftBtn = document.getElementById("left_btn");
let rightBtn = document.getElementById("right_btn");
let greenBtn = document.getElementById("on_btn");
let redBtn = document.getElementById("off_btn");
let enterBtn = document.getElementById("enter_btn");
let screen = document.getElementById("lightbeam");
let wall = document.getElementById("wall");


redBtn.addEventListener("click", projectorOnOff);
greenBtn.addEventListener("click", projectorOnOff);

function projectorOnOff() { 																// function for if on/off button is pressed
	if (redBtn.style.display=="none") { 
		redBtn.style.display="block";                                                       // change power button icon
		$(screen).fadeOut(4000);                                                            // projector turning on
		$(wall).fadeIn(4000);
	}
	else {
		redBtn.style.display="none";
		$(screen).fadeIn(4000);
		$(wall).fadeOut(2000);
	}
												
}

// redBtn.addEventListener("click", clickSound);
// greenBtn.addEventListener("click", clickSound);

// function clickSound() {                                                                      // sound on projector button click
// 	if (document.getElementById("click-sound").isPlaying()!=true) {
// 		document.getElementById("click-sound").play();
// 	}
// 	else if (document.getElementById("click-sound").isPlaying()==true) {
// 		document.getElementById("click-sound").pause();
// 	}
// }

$num = $('.my-card').length;																 // nav menu carousel
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {																		 // assign class to the slide
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {															// slide click action
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {                                                           // if next slide is clicked
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});                   
  } else if ($(this).hasClass('prev')) {                                                    // if prev slide is clicked
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');                                                         // update classes
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


$('html body').keydown(function(e) {                                                         // keyboard click assign
  if (e.keyCode == 37) { 
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { 
    $('.active').next().trigger('click');
  }
});

leftBtn.addEventListener("click", function(){												 // projector buttons assign
	$('.active').prev().trigger('click');
})

rightBtn.addEventListener("click", function(){
	$('.active').next().trigger('click');
})

enterBtn.addEventListener("click", goTo)                                                      // projector enter buttton press

function goTo(){
	if (document.querySelector(".card-carousel .my-card:nth-child(1)")==document.querySelector(".card-carousel .my-card.active")) {
		document.getElementById("menu-page").style.display="none";
		document.getElementById("about-page").style.display="block";
	}
	else if (document.querySelector(".card-carousel .my-card:nth-child(2)")==document.querySelector(".card-carousel .my-card.active")) {
		document.getElementById("menu-page").style.display="none";
		document.getElementById("projects-page").style.display="block";
		document.getElementById("projects-menu").style.display="flex";
	}
	else if (document.querySelector(".card-carousel .my-card:nth-child(3)")==document.querySelector(".card-carousel .my-card.active")) {
		document.getElementById("menu-page").style.display="none";
		document.getElementById("contacts-page").style.display="block";
	}
}

function shareContacts(){                                                                     // 'ask a question' button press
	document.getElementById("contacts-page").style.display="block";
	document.getElementById("menu-page").style.display="none";
	document.getElementById("projects-page").style.display="none";
	document.getElementById("about-page").style.display="none";
	document.getElementById("asg1").style.display="none";
	document.getElementById("asg2").style.display="none";
	document.getElementById("asg3").style.display="none";
	document.getElementById("asg4").style.display="none";
	document.getElementById("projects-page").style.backgroundImage="none";
}

function copyText() {                                                                          // copy email to the clipboard function
  const cb = navigator.clipboard;
  const emailAddress = document.getElementById("email_address");
  cb.writeText(emailAddress.innerText).then(() => alert('Email address copied!'));
}

function showCloud() {																		   // letter hover events
	document.getElementById("contacts-page").style.backgroundImage="url('contacts_bcg.jpg')";
	document.querySelector("#cloud p").style.color="#e8bc77";
}

function hideCloud() {
	document.getElementById("contacts-page").style.backgroundImage="none";
	document.querySelector("#cloud p").style.color="#74a089";
}

function toMenu() {																			    // back to menu from projects subsections
	document.getElementById("menu-page").style.display="block";
	document.getElementById("contacts-page").style.display="none";
	document.getElementById("projects-page").style.display="none";
	document.getElementById("about-page").style.display="none";
}

function projectsMenu(slideNum){                                                                // show projects
	if (slideNum==1) {
		document.getElementById("asg1").style.display="block";
		document.getElementById("asg2").style.display="none";
		document.getElementById("asg3").style.display="none";
		document.getElementById("asg4").style.display="none";
		document.getElementById("projects-menu").style.display="none";
		document.getElementById("projects-page").style.backgroundImage="url('asg1.jpg')";

	}
	else if (slideNum==2) {
		document.getElementById("asg2").style.display="block";
		document.getElementById("asg1").style.display="none";
		document.getElementById("asg3").style.display="none";
		document.getElementById("asg4").style.display="none";
		document.getElementById("projects-menu").style.display="none";
		document.getElementById("projects-page").style.backgroundImage="url('asg2.jpg')";
	}
	else if (slideNum==3) {
		document.getElementById("asg3").style.display="block";
		document.getElementById("asg1").style.display="none";
		document.getElementById("asg2").style.display="none";
		document.getElementById("asg4").style.display="none";
		document.getElementById("projects-menu").style.display="none";
		document.getElementById("projects-page").style.backgroundImage="url('asg3.jpg')";
	}
	else if (slideNum==4) {
		document.getElementById("asg4").style.display="block";
		document.getElementById("asg1").style.display="none";
		document.getElementById("asg2").style.display="none";
		document.getElementById("asg3").style.display="none";
		document.getElementById("projects-menu").style.display="none";
		document.getElementById("projects-page").style.backgroundImage="url('asg4.jpg')";
	}
	else if (slideNum==5) {
		document.getElementById("asg1").style.display="none";
		document.getElementById("asg2").style.display="none";
		document.getElementById("asg3").style.display="none";
		document.getElementById("asg4").style.display="none";
		document.getElementById("projects-menu").style.display="flex";
		document.getElementById("projects-page").style.backgroundImage="none";
	}
}