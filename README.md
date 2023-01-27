Dynamically resize elements with this lightweight library

---------------------------------------------------------

See codepen...

https://codepen.io/seanp97/pen/WNKyKWO

To use...

const resp = new Responsive('.grid-wrapper', 15);

We call the SizeGrid() function on resize to make sure th elements are resized for the correct screen size

window.addEventListener('resize', function(){
    resp.SizeGrid();
});

'.grid-wrapper' being the parent element and 15 being the optional argument for the grid-gap spacing
