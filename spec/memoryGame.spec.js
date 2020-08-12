var jsdom = require("jsdom");

function flipCard() {
  document.getElementById("booya").innerHTML = "so cool";
}

describe("cardFlipped", function() {
  beforeEach(function() {
    const dom = new jsdom.JSDOM('<html><div class="memory-card" data-cardtest="one" onclick="flipCard()"> </html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it("flips to", function() {
    expect(global.document.getElementById("flips").innerHTML).toBe("flip");
    flipCard(); 
    expect(global.document.getElementById("flips").innerHTML).toBe("flip");
  });
});

describe("adds all cards to an array",function(){
	const html = require('./fixtures')
	var jsdom = require("jsdom");
	const {JSDOM} = jsdom;
  
	  const virtualConsole = new jsdom.VirtualConsole();
  
	virtualConsole.sendTo(console);
  
	  const clickSimulator = (arg)=>{
		  let event = new dom.window.MouseEvent('click', {
			  view: dom.window,
			  bubbles: true,
			  cancelable: false
		  })
  
		  let element = document.getElementsByClassName('memory-card')[arg];
		  element.dispatchEvent(event);
	  };
  
	  beforeEach(()=>{
  
		  dom = new JSDOM(html,{
		  
			  runScripts: "dangerously",
			  resources: "usable"
			});
		  document = dom.window.document;
		  game = require("../src/js/memory_Game");
		  
	  })
  
	  afterEach(()=>{
		  delete require.cache[require.resolve('../src/js/memory_Game')]
	  })
  
	  it('must have 12 cards in array', function() {
		  expect(document.getElementsByClassName('memory-card').length).toEqual(12)
	  });
   
	  });