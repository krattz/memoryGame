describe("adds all cards to an array",function(){
  const html = require('./fixtures')
	const jsdom = require('jsdom')
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

