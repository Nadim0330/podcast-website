<html>
<head>
<title>80's Overdose Volume 1</title>
<script type="text/javascript">

function init()
{
    document.addEventListener('click', function(evt) { if (evt.target.tagName.toLowerCase() == 'li') { play(evt.target); } }, false)
}


function skip()
{
}

function play(elem)
{
    var audio = document.getElementById('audio');
    audio.src = elem.textContent + '.mp3';
    audio.play();
    elem.className = 'playing';
    skip = function()
    {
            elem.className = '';
            if (elem.nextElementSibling)
            {
                play(elem.nextElementSibling);
            }
    }
}
</script>
<style type="text/css">
ul { -webkit-column-count:2;-moz-column-count:2;column-count:2; }
li:hover { text-decoration: underline; }
li.playing { font-weight: bold; }
</style>
</head>
<body onload="init()">
<h1>80's Overdose Volume 1</h1>
<hr/>
<audio id="audio" controls="controls" onerror="alert('Could not play MP3 audio file ' + this.src + '!');" onended="skip()">
HTML5 MP3 audio required (Chrome, Safari, IE 9?)
</audio>

<ul>
<li>99 Red Balloons - Nena</li>
<li>Africa - Toto</li>
<li>A Girl Like You - The Smithereens</li>
<li>A Little Respect - Erasure</li>
<li>All I Need Is a Miracle - Mike &amp; The Mechanics</li>
<li>Moving In Stereo - The Cars</li>
<li>All Mixed Up - The Cars</li>
<li>A Million Miles Away - The Plimsouls</li>
<li>Back To Life (However Do You Want Me)  (Feat. Caron Wheeler) - Soul II Soul</li>
<li>Big In Japan - Alphaville</li>
<li>Blue Monday - New Order</li>
<li>Bring Your Love Down (Didnt I) - Yazoo</li>
<li>Buffalo Stance - Neneh Cherry</li>
<li>Burning Down the House - Talking Heads</li>
<li>Chains Of Love - Erasure</li>
<li>Check It Out - John Mellencamp</li>
<li>Close My Eyes Forever - Lita Ford</li>
<li>Crimson And Clover - Joan Jett and The Blackhearts</li>
<li>Cruel Summer - Banarama</li>
<li>Cuts You Up - Peter Murphy</li>
<li>Dance On My Own - Robert Plant</li>
<li>Danger Zone - Kenny Loggins</li>
<li>Don't Stop 'Til You Get Enough - Michael Jackson</li>
<li>Don't You Want Me - The Human League</li>
<li>Downtown Train - Rod Stewart</li>
<li>Down Under - Men At Work</li>
<li>Electric Avenue - Eddy Grant</li>
<li>Electric Blue - Icehouse</li>
<li>Endless Summer Nights - Richard Marx</li>
<li>Everybody Have Fun Tonight - Wang Chung</li>
<li>Every Little Thing She Does Is Magic - The Police</li>
<li>Everything Counts (Long Version) - Depeche Mode</li>
<li>Everything's Coming Up Roses - Black</li>
<li>Eyes Of A Stranger - Payolas</li>
<li>Eyes Without a Face - Billy Idol</li>
<li>Forever Young - Alphaville</li>
<li>Great Southern Land - Icehouse</li>
<li>Heart - Pet Shop Boys</li>
<li>Hold Me Now - Thompson Twins</li>
<li>How Do I Get Close - The Kinks</li>
<li>I Feel for You - Chaka Khan</li>
<li>If You Leave - Orchestral Manoeuvres in the Dark</li>
<li>I Know You're Out There Somewhere - The Moody Blues</li>
<li>I'm Lookin' For A New Love - Jody Watley</li>
<li>I Ran (So Far Away) - Flock of Seagulls</li>
<li>It Can Happen - Yes</li>
<li>It's My Life - Talk Talk</li>
<li>I Want a New Drug - Huey Lewis &amp; the News</li>
<li>I Want Her - Keith Sweat</li>
<li>Jane - Starship</li>
<li>Jeopardy - Greg Kihn Band</li>
<li>Jungle Love - The Time</li>
<li>Just Like Paradise - David Lee Roth</li>
<li>Kiss And Tell - Bryan Ferry</li>
<li>Kiss Them For Me - Siouxsie &amp; The Banshees</li>
<li>Let The Music Play - Shannon</li>
<li>Like To Get To Know You Well - Howard Jones</li>
<li>Lips Like Sugar - Echo &amp; The Bunnymen</li>
<li>Living On Video - Trans X</li>
<li>Love Is A Battlefield - Pat Benatar</li>
<li>Lucky Star - Madonna</li>
<li>Mad World - Tears For Fears</li>
<li>Major Tom (Coming Home) - Peter Schilling</li>
<li>Metropolis - The Church</li>
<li>Mystify - INXS</li>
<li>Naughty Naughty (LP Version) - John Parr</li>
<li>Never - Heart</li>
<li>Never Surrender - Corey Hart</li>
<li>New Moon On Monday - Duran Duran</li>
<li>Nodisco - Depeche Mode</li>
<li>Obsession - Animotion</li>
<li>One of Our Submarines - Thomas Dolby</li>
<li>Open Your Eyes - Lords Of The New Church</li>
<li>Orange Crush - R.E.M.</li>
<li>Pale Shelter - Tears For Fears</li>
<li>Poison Arrow - ABC</li>
<li>Promises, Promises - Naked Eyes</li>
<li>Pump Up The Volume - MARRS</li>
<li>Purple Rain - Prince</li>
<li>Push it - Salt-N-Pepa</li>
<li>Put A Little Love In Your Heart - Al Green</li>
<li>Put Down That Weapon - Midnight Oil</li>
<li>Real Wild Child (Wild One) - Iggy Pop</li>
<li>Rocket - Herbie Hancock</li>
<li>Rock Me Amadeus - Falco</li>
<li>Rock Steady - The Whispers</li>
<li>Run To You - Bryan Adams</li>
<li>Sanctify Yourself - Simple Minds</li>
<li>Saved By Zero - The Fixx</li>
<li>Self Control - Laura Branigan</li>
<li>Shattered Dreams - Johnny Hates Jazz</li>
<li>She Bop - Cyndi Lauper</li>
<li>She Talks In Stereo - Gary Myrick &amp; The Figures</li>
<li>So Alive - Love and Rockets</li>
<li>Something About You - Level 42</li>
<li>Strength (Single Version) - The Alarm</li>
<li>Talking In Your Sleep - Romantics</li>
<li>The Angel - Ministry</li>
<li>The Final Countdown - Europe</li>
<li>The Great Commandment - Camouflage</li>
<li>The Humpty Dance - Digital Underground</li>
<li>The Promise - When in Rome</li>
<li>The Sun Always Shines on T.V. - A-ha</li>
<li>The Warrior - Scandal</li>
<li>This is the Day - The The</li>
<li>Through The Fire - Larry Greene</li>
<li>Time Again For The Golden Sunset - The The</li>
<li>Transmission - Joy Division</li>
<li>Tunnel Of Love - Bruce Springsteen</li>
<li>Turning Japanese - The Vapors</li>
<li>Walking In L.A. - Missing Persons</li>
<li>Watching the Detectives - Elvis Costello</li>
<li>What Have You Done For Me Lately - Janet Jackson</li>
<li>What Is Love - Howard Jones</li>
<li>What's on Your Mind (Pure Energy) - Information Society</li>
<li>Why Can't I Be You? - The Cure</li>
<li>Words - Missing Persons</li>
<li>Wouldn't It Be Good - Nik Kershaw</li>
<li>You Belong To The City(extend) - Glenn Frey</li>
<li>You Spin Me Round (Like a Record) - Dead or Alive</li>
</ul>
</body>
</html>