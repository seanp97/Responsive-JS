const resp = new Responsive('.grid-wrapper', 15);

window.addEventListener('resize', function(){
    resp.SizeGrid();
});