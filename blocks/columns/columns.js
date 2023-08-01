export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}


// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
	duration: 100, // the scene should last for a scroll distance of 100px
	offset: 50, // start this scene after scrolling for 50px
})
	.setPin('.blog') // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller
