class Responsive {

    constructor(el, gap = 20) {
        this._el = el;
        this._gap = gap;
        this.SizeGrid(this._el);
    }

    SizeGrid() {
        this._parentEl = document.querySelector(this._el);
        this._parentEl.style.display = 'grid';
        this._parentEl.style.gridGap = `${this._gap}px`;
        this._childrenEl = this._parentEl.children;
        this._childrenLength = this._childrenEl.length;
        this._gridSize = 0;
        this._gridOptions = [];

        for(let i = 1; i <= this._childrenLength; i++) {
            if(this._childrenLength % i == 0) {
                if(i > 2 && i <= 8) {
                    this._gridOptions.push(i);
                }
            }

            if(this._childrenLength % i != 0) {
                if(i > 2 && i <= 8) {
                    this._gridOptions.push(i);
                }
            }
        }
        
        if(this.ScreenWidth() >= 1300) {
            this._parentEl.style.gridTemplateColumns = `repeat(${this._gridOptions[this._gridOptions.length - 1]}, auto)`;
        }

        if(this.ScreenWidth() < 1299) {
            this._parentEl.style.gridTemplateColumns = `repeat(${this._gridOptions[0]}, auto)`;
        }

        if(this.ScreenWidth() < 992) {
            this._parentEl.style.gridTemplateColumns = `repeat(2, auto)`;
        }

        if(this.ScreenWidth() < 767) {
            this._parentEl.style.gridTemplateColumns = `100%`;
        }
    }

    ScreenWidth() {
        return window.innerWidth;
    }

}
