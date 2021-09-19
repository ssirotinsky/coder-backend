class Paint {
    constructor(){
        this.rectangleMap = new Array(1280);
        this.iniMap(this.rectangleMap);
    }
    
    iniMap(){
        for (let i=0; i<1280; i++){
            this.rectangleMap[i] = new Array(1280);
        }
    }
    
    mapToArray(map){
        let array = [];
        for (let x=0; x<map.length; x++){
            for (let y=0; y<map[x].length; y++){
                let r = map[x][y];
                if (r != null){
                    array.push(r);
                }
            }
        }
        return array;
    }

    Shape(_x, _y, _w, _h, _r, _g, _b){
        return {x: _x, y: _y, w: _w, h: _h, r: _r, g: _g, b: _b};
    }
    
}

module.exports = new Paint();