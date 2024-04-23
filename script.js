$(document).ready(function() {
    var audioPlayer = $('#audio-player')[0];
    var playlistItems = $('#playlist li');
    var currentMusicIndex = 0;
    var timeline = $('.timeline');
    var timer = $('.timer');
    var timelineWidth = $('.timeline-container').width();
    var isShuffle = false;
    var isRepeat = false;

    // Play/Pause button click event
    $('#play-pause-btn').click(function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            $(this).html('&#9208;');
        } else {
            audioPlayer.pause();
            $(this).html('&#9654;');
        }
    });

    // Next button click event
    $('#next-btn').click(function() {
        currentMusicIndex++;
        if (currentMusicIndex >= playlistItems.length) {
            currentMusicIndex = 0;
        }
        playMusicAtIndex(currentMusicIndex);
    });

    // Previous button click event
    $('#previous-btn').click(function() {
        currentMusicIndex--;
        if (currentMusicIndex < 0) {
            currentMusicIndex = playlistItems.length - 1;
        }
        playMusicAtIndex(currentMusicIndex);
    });

    // Shuffle button click event
    $('#shuffle-btn').click(function() {
    isShuffle = !isShuffle;
    $(this).toggleClass('active', isShuffle);
    });

    // Repeat button click event
    $('#repeat-btn').click(function() {
    isRepeat = !isRepeat;
    $(this).toggleClass('active', isRepeat);
    });

    // Function to play music at a specific index in the playlist
    function playMusicAtIndex(index) {
        var musicFile = playlistItems.eq(index).text();
        audioPlayer.src = 'music/' + musicFile;
        audioPlayer.play();
        $('#playlist .active').removeClass('active');
        playlistItems.eq(index).addClass('active');
    }

    // When a music file is clicked from the playlist
    playlistItems.click(function() {
        currentMusicIndex = $(this).index();
        playMusicAtIndex(currentMusicIndex);
    });

    // Update timeline as music plays
     // Update timeline and timer as music plays
    // Update timeline and timer as music plays
// Update timeline and timer as music plays
audioPlayer.addEventListener('timeupdate', function() {
    var position = audioPlayer.currentTime / audioPlayer.duration;
    var newPosition = position * timelineWidth;
    timeline.css('width', newPosition + 'px');
    timer.css('width', newPosition + 'px');
    
    // Update digital timer
    var currentTime = formatTime(audioPlayer.currentTime);
    var totalTime = formatTime(audioPlayer.duration);
    $('.digital-timer').text(currentTime);
    $('.total-time').text(totalTime);
});


// Function to format time (MM:SS)
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return padZero(minutes) + ':' + padZero(seconds);
}

// Function to pad zero if single digit
function padZero(num) {
    return (num < 10) ? '0' + num : num;
}



    // Seek functionality on timeline click
    $('.timeline-container').click(function(e) {
    var offsetX = e.pageX - $(this).offset().left;
    var duration = audioPlayer.duration;
    var width = $(this).width();
    var seekTime = (offsetX / width) * duration;
    audioPlayer.currentTime = seekTime;
});
});

audioPlayer.addEventListener('ended', function() {
    if (isRepeat) {
        audioPlayer.play();
    } else if (isShuffle) {
        var randomIndex = Math.floor(Math.random() * playlistItems.length);
        playMusic(randomIndex);
    } else {
        playNext();
    }
});

// Function to play music at a specific index
function playMusic(index) {
    // Your code to play music at the specified index goes here
}
