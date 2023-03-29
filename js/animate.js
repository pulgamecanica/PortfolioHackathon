function animateBunny(x, y) {
	document.getElementById("easter-animation").style.backgroundPosition = `-${x}px -${y}px`;
}
/**
 * Lazy [100 * 0, 133 * 0]
 * Sad [100 * 1, 133 * 0]
 * OpenMouth [100 * 2, 133 * 0]
 * Doubt [100 * 3, 133 * 0]

 * Cry [100 * 0, 133 * 1]
 * Love [100 * 1, 133 * 1]
 * Vomit [100 * 2, 133 * 1]
 * Yummy [100 * 3, 133 * 1]
 
 * Upset [100 * 0, 133 * 2]
 * Smile [100 * 1, 133 * 2]
 * Cute [100 * 2, 133 * 2]
 * Normal [100 * 3, 133 * 2]
 **/
function animateAction(x, y) {
	animateBunny(100 * x, 133.3 * y);
//	animateBunny(100 * 0, 0);
//	animateBunny(100 * 1, 0);
//	animateBunny(100 * 2, 0);
//	animateBunny(100 * 3, 0);

//	animateBunny(100 * 0, 133.3 * 1);
//	animateBunny(100 * 1, 133.3 * 1);
//	animateBunny(100 * 2, 133.3 * 1);
//	animateBunny(100 * 3, 133.3 * 1);

//	animateBunny(100 * 0, 133.3 * 2);
//	animateBunny(100 * 1, 133.3 * 2);
//	animateBunny(100 * 2, 133.3 * 2);
//	animateBunny(100 * 3, 133.3 * 2);
}

const fast = new Date();
fast.setSeconds(5);
const meddium = new Date();
meddium.setSeconds(10);
const slow = new Date();
slow.setSeconds(15);

const timeline = [
	{
		easterConversation: ["Hello!", "Welcome to the Easter Hackathon."],
		story: ["<img src=\"assets/images/easter-egg-animation.gif\" width=\"200px\" height=\"200px\">"],
		maxTime: null,
		bunnyAnimation: [0, 0]
	},
	{
		easterConversation: ["You will need to work in a group.", "Remain polite and open to your peers."],
		story: ["<img src=\"assets/images/bunnies-group.gif\" width=\"400px\" height=\"200px\">"],
		maxTime: fast,
		bunnyAnimation: [1, 2]
	},
	{
		easterConversation: ["You need to come up with a program that generates a portfolio."],
		story: ["<span class=\"images-collage\"><img src=\"assets/images/portfolio1.png\"><img src=\"assets/images/portfolio2.png\"><img src=\"assets/images/portfolio3.png\"><img src=\"assets/images/portfolio4.png\"></span>"],
		maxTime: slow,
		bunnyAnimation: [1, 1]
	},
	{
		easterConversation: ["Based on the common core. It must display the <b>projects, skills and lvl</b> of the student."],
		story: ["<img src=\"assets/images/charts.png\" width=\"400px\" height=\"auto\">"],
		maxTime: null,
		bunnyAnimation: [3, 2]
	},
	{
		easterConversation: ["You have to be creative, figure out what you are going to use. Think about the usage of portfolios."],
		story: ["<span class=\"images-collage\"><img src=\"assets/images/badge1.png\"><img src=\"assets/images/badge2.png\"></span>"],
		maxTime: null,
		bunnyAnimation: [2, 0]
	},
	{
		easterConversation: ["You can use 42Api to fetch the data, or download the json example I provide. API's are easy :)"],
		story: ["<img src=\"assets/images/42API.png\" height=\"250px\">"],
		maxTime: null,
		bunnyAnimation: [1, 0]
	},
	{
		easterConversation: ["When you finish please provide a link to your repository <b><a href=\"#\">here</a></b>."],
		story: ["<img src=\"assets/images/baby-scream-yeah.gif\">"],
		maxTime: null,
		bunnyAnimation: [0, 1]
	},
	{
		easterConversation: ["Project TimeLine!!!"],
		story: [" \
<div class=\"timeline\"> \
  <div class=\"container left\"> \
    <div class=\"timeline-content\"> \
      <h2>1</h2> \
      <p>Decision Making, choose your stack and do a mockup of the result.</p> \
    </div> \
  </div> \
  <div class=\"container right\"> \
    <div class=\"timeline-content\"> \
      <h2>2</h2> \
      <p>Analize the data, create the project structure.</p> \
    </div> \
  </div> \
  <div class=\"container left\"> \
    <div class=\"timeline-content\"> \
      <h2>3</h2> \
      <p>Generate a live Portfolio!</p> \
    </div> \
  </div> \
  <div class=\"container right\"> \
    <div class=\"timeline-content\"> \
      <h2>4</h2> \
      <p>Present your project to your peers.</p> \
    </div> \
  </div> \
</div> \
		"],
		maxTime: null,
		bunnyAnimation: [2, 2]
	},
	{
		easterConversation: ["Index & Resources."],
		story: ["<span class=\"index round\"><a href=\"index.html\">Home</a><a href=\"./hackathon.html\">Start Over</a></span><hr><span class=\"index round\"><a href=\"\">Tutorial 42API</a></span>"],
		maxTime: null,
		bunnyAnimation: [2, 3]
	}
];

let progressTimeline = 0;

let currentTimeline = () => {
	if (progressTimeline > timeline.length || progressTimeline < 0) {
		show_time_line
		return null;
	}
	return timeline[progressTimeline];
};

let updateTimeline = () => {
	const conversation = document.getElementById("easter-conversation");
	const story = document.getElementById("easter-story");
	if (!conversation | !story) {
		return ;
	}
	if (!currentTimeline()) {
		conversation.style.display = "none";
		story.style.display = "none";
		return ;
	}
	story.style.display = "block";
	conversation.style.display = "block";
	conversation.innerHTML = "";
	for (let i = 0; i < currentTimeline().easterConversation.length; i++) {
		let paragraph = document.createElement("p");
		paragraph.innerHTML = currentTimeline().easterConversation[i];
		conversation.appendChild(paragraph);
	}
	story.innerHTML = currentTimeline().story;
	animateAction(...currentTimeline().bunnyAnimation);
}

function nextTimeLine() {
	if (progressTimeline < timeline.length - 1) {
		progressTimeline += 1;
		updateTimeline();
	}
}

function lastTimeLine() {
	if (progressTimeline == 0) {
		return;
	}
	progressTimeline -= 1;
	updateTimeline();
}

function skipTimeLine() {
	progressTimeline = timeline.length - 1;
	updateTimeline();
}