<h1 class="text-center">Hashim Music Player</h1>
<div class="row mt-3">
    <div class="col-md-12">
        <div id="music-player" class="text-center">
            <audio id="audio-player" controls autoplay style="display: none;">
                <source src="" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
            <div class="timer-container">
             <span class="digital-timer"></span>
            <!--<span class="total-time"></span>-->
            </div>
            <div class="timeline-container">

            <div class="timeline"></div>
            </div>



            <div class="mt-3">
            <button id="shuffle-btn" class="btn btn-outline-dark control-btn"><i class="fas fa-random"></i></button>
            <button id="previous-btn" class="btn btn-outline-dark control-btn"><i class="fas fa-step-backward"></i></button>
            <button id="play-pause-btn" class="btn btn-outline-dark control-btn"><i class="fas fa-play"></i></button>
            <button id="next-btn" class="btn btn-outline-dark control-btn"><i class="fas fa-step-forward"></i></button>
            <button id="repeat-btn" class="btn btn-outline-dark control-btn"><i class="fas fa-redo"></i></button>
            </div>

        </div>
        <ul id="playlist" class="list-group mt-3">
            <?php
            $musicFolder = "music/";
            $musicFiles = glob($musicFolder . "*.mp3");
            foreach ($musicFiles as $musicFile) {
                $fileName = basename($musicFile);
                echo '<li class="list-group-item text-truncate">' . $fileName . '</li>';
            }
            ?>
        </ul>
    </div>
</div>
