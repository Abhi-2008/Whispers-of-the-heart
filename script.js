

// Function to hide all sections
function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  }
  
 

  
  // Function to show the apology section
  function showApology() {
    hideAllSections();
    document.getElementById('apology-section').style.display = 'block';
  }
  
  // Function to show the letter section
  // function showLetter() {
  //   hideAllSections();
  //   document.getElementById('letter-section').style.display = 'block';
  //   createFallingHearts(); // Create falling hearts when the "Letter from the Heart" section is displayed
  // }
  
  
  
  // Function to create falling hearts
  // function createFallingHearts() {
  //     // Get the container within the 'Letter from the Heart' section
  //     var heartContainer = document.getElementById('letter-section');
  
  //     for (var i = 0; i < 20; i++) {
  //         var heart = document.createElement('div');
  //         heart.className = 'falling-heart';
  //         heart.style.left = Math.random() * window.innerWidth + 'px';
  //         heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  //         heartContainer.appendChild(heart);
  
  //         // Remove the heart from the DOM after the animation completes
  //         heart.addEventListener('animationend', function () {
  //             this.remove();
  //         });
  //     }
  // }
  
  // Function to create falling hearts
  function createFallingHearts() {
    var heartContainer = document.getElementById('letter-section');
    heartContainer.style.position = 'relative';
  
    for (var i = 0; i < 20; i++) {
      var heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = 0; // Add this line
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.position = 'absolute';
      heartContainer.appendChild(heart);
  
      heart.addEventListener('animationend', function() {
        this.remove();
      });
    }
  }
  
  
  
  
  
  
  
  // Function to show the letter section
  function showLetter() {
    hideAllSections();
    document.getElementById('letter-section').style.display = 'block';
  
    // Create falling hearts after a slight delay
    setTimeout(createFallingHearts, 100);
  }
  
  
  // Event listeners for navigation links

  document.getElementById('apology-link').addEventListener('click', showApology);
  document.getElementById('letter-link').addEventListener('click', showLetter);
  
  
  // Heart section
  document.getElementById('acceptButton').addEventListener('click', function() {
    fixHeart();
  });
  
  // Function to fix the heart and show small hearts
  function fixHeart() {
    // Get the heart container
    var heartContainer = document.getElementById('heart-container');
  
    // Hide the broken heart
    document.getElementById('broken-heart').style.display = 'none';
  
    // Show the fixed heart
    document.getElementById('fixed-heart').style.display = 'block';
  
    // Create small hearts and add them to the container
    createSmallHearts();
  
    // Disable the button after accepting the apology
    document.getElementById('acceptButton').disabled = true;
  }
  
  function createSmallHearts() {
    var smallHeartsContainer = document.getElementById('small-hearts-container');
    for (var i = 0; i < 20; i++) {
      var smallHeart = document.createElement('div');
      smallHeart.className = 'small-heart';
      smallHeartsContainer.appendChild(smallHeart);
      animateSmallHeart(smallHeart);
    }
  }
  
  function animateSmallHeart(smallHeart) {
    var animationDuration = Math.random() * 2 + 4;
    var startPositionX = Math.random() * 100;
    smallHeart.style.animation = `rise ${animationDuration}s linear`;
    smallHeart.style.left = `${startPositionX}vw`;
    setTimeout(function() {
      smallHeart.remove();
    }, animationDuration * 1000);
  }
  
  
  // for muisic
  
  
  function playAudio() {
    const audioControls = document.getElementById('audio-controls');
    audioControls.classList.add('active');
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
  }
  function toggleAudio() {
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
  
  
  // for video
  
  // script.js
  
  var videoContainer = document.getElementById("video-container");
  var video = document.getElementById("myVideo");
  var playPauseBtn = document.getElementById("playPauseBtn");
  
  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = "Pause";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "Play";
    }
  }
  
  function showVideo() {
    hideAllSections();
    videoContainer.style.display = "block";
  }
  
  function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  }
  
  
  