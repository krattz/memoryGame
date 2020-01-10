const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../src/css/style.css" />
    <title>Document</title>
</head>
<body>
    <h1 class="page-title">Memory Game</h1>
    <div class="memory-game">
                <div class="game-info-container">
                                <div class="game-info">
                                        Flips: <span id="flips">0</span>
                                </div>
                            </div>   
<!-- row 1 card 1 -->
            <!-- row 1 card 1 -->
            <div class="memory-card" data-cardtest="one" onclick="flipCard()">    
                    <img class="back-face card-face" src="../pics/skype.png" />   
                    <img class="front-face card-face" src="../pics/gow.jpg" />   
                    <img class="back-face card-face" src="../src/pics/skype.png" />   
                    <img class="front-face card-face" src="../src/pics/gow.jpg" />   
            </div>
            <!-- row 1 card 2 -->
            <div class="memory-card" data-cardtest="two">
                    <img class="back-face" src="../pics/skype.png" />
                    <img class="front-face" src="../pics/sharingan1.jpeg" />
                    <img class="back-face" src="../src/pics/skype.png" />
                    <img class="front-face" src="../src/pics/sharingan1.jpeg" />
            </div>
            <!-- row 1 card 3 -->
            <div class="memory-card" data-cardtest="three">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan4.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan4.jpeg"/>
            </div>
            <!-- row 1 card 4 -->
            <div class="memory-card"  data-cardtest="four">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan3.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan3.jpeg"/>
            </div>
            <!-- row 2 card 1 -->
            <div class="memory-card" data-cardtest="five">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan2.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan2.jpeg"/>
            </div>
            <!-- row 2 card 2 -->
            <div class="memory-card" data-cardtest="one">
                    <img class="back-face" src="../pics/skype.png"/> 
                    <img class="front-face" src="../pics/gow.jpg"/>
                    <img class="back-face" src="../src/pics/skype.png"/> 
                    <img class="front-face" src="../src/pics/gow.jpg"/>
            </div>
            <!-- row 2 card 3 -->
            <div class="memory-card" data-cardtest="two">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan1.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan1.jpeg"/>
            </div>
            <!-- row 2 card 4 -->
            <div class="memory-card" data-cardtest="five">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan2.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan2.jpeg"/>
            </div>
            <!-- row 3 card 1 -->
            <div class="memory-card" data-cardtest="six">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan6.jpg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan6.jpg"/>
            </div>
            <!-- row 3 card 2 -->
            <div class="memory-card" data-cardtest="four">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan3.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan3.jpeg"/>
            </div>
            <!-- row 3 card 3 -->
            <div class="memory-card" data-cardtest="three">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan4.jpeg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan4.jpeg"/>
            </div>
            <!-- row 3 card 4 -->
            <div class="memory-card" data-cardtest="six">
                    <img class="back-face" src="../pics/skype.png"/>
                    <img class="front-face" src="../pics/sharingan6.jpg"/>
                    <img class="back-face" src="../src/pics/skype.png"/>
                    <img class="front-face" src="../src/pics/sharingan6.jpg"/>
            </div>
</div>
<h2 id="more">Click button to start over</h2>
<button onclick="location.reload()" type="reset">Restart</button>
<script src="../src/js/memory_Game.js"></script>
</body>
</html>`
module.exports = html;
