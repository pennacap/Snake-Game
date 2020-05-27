class Snake {
    constructor() {
        this.body = [[1050, 1050, 0]]
        this.positionX = null;
        this.positionY  = null;
    
        this.dir = 0;
    }
    display() {
        
        if (this.body[0][0] == pos.x && this.body[0][1] == pos.y){
            dofoodLocation = true;
            score++
            var f = this.body[this.body.length-1]
            if (f[2] == 0) {
                var val = createVector(f[0], f[1])
                val.y += 100
                this.body.push([val.x, val.y, 90])
            }
            if (f[2] == 90) {
                var val = createVector(f[0], f[1])
                val.x += 100
                this.body.push([val.x, val.y, 0])
            }
            if (f[2] == 180) {
                var val = createVector(f[0], f[1])
                val.y -= 100
                this.body.push([val.x, val.y, 180])
            }
            if (f[2] == 270) {
                var val = createVector(f[0], f[1])
                val.x -= 100
                this.body.push([val.x, val.y, 270])
            }

        }
        if (this.body[0][0]>2000||this.body[0][0]<0||this.body[0][1]>2000||this.body[0][1]<0) {
            endgame = true;

        }
        this.body[0][2] = dir;
        for (var i = 0; i < this.body.length; i++) {
            var x = this.body[0][0];
        var y = this.body[0][1];
            if (this.dir!=dir) {
                this.positionX = x;
                //console.log(this.positionX)
                this.positionY = y;
                //console.log(this.positionY)
                this.dir = dir;
            }else {
                if (i != 0) {
                switch(this.dir){
                    case 0: 
                    this.body[i][0] = x;
                    this.body[i][1] = y+100;
        
                        break;
                    case 90: 
                        this.body[i][0] = x-100;
                        this.body[i][1] = y;
                        break;
                    case 180: 
                        this.body[i][0] = x;
                        this.body[i][1] = y-100;
                        break;
                    case 270: 
                    this.body[i][0] = x+100;
                    this.body[i][1] = y;
                        break;     
            }
        }
        }
        if (this.positionX!=null){
             if (i != 0) {
                 if (this.body[i][0] == this.positionX && this.body[i][1] == this.positionY) {
                     this.body[i][2] = this.dir;
                 }
                // is.body[i][0] = this.earlierPositionX;
                // this.body[i][1] = this.earlierPositionY+100;
             }   
        }
        rectMode(CENTER);
        rect(this.body[i][0], this.body[i][1], 100, 100);
        }
        if (frameCount %30 == 0) {
        var x = this.body[0][0]
            var y = this.body[0][1]
            
        switch(this.body[0][2]){
            case 0: 
                this.body[0][1] = y - 100;

                break;
            case 90: 
                this.body[0][0] = x - 100;
                break;
            case 180: 
                this.body[0][1] = y + 100;
                break;
            case 270: 
                this.body[0][0] = x + 100;
                break;       
            
            
        }
        
        
    
    
    //     console.log(dir);
    //     var positionX = this.body[0][0];
    //     var positionY = this.body[0][1];
    //     // if (dir != this.body[0][2]){//this.check == false){
    //     //     this.positionX = positionX;
    //     //     this.positionY = positionY;
    //     //     //this.check = true;
            
    //     // }
    //     for (var i = 0; i < this.body.length; i++){
    //         rectMode(CENTER);
    //         rect(this.body[i][0], this.body[i][1], 100, 100);
    //    }
    //    for (var i = 0; i < this.length; i++){
    //        if (this.body[i][2]==0){
    //            var x = this.body[i][0];
    //            var y = this.body[i][1];
    //            this.body[i] = [x, y-100, 0];
    //        } 
    //        if (this.body[i][2]==90){
    //         var x = this.body[i][0];
    //         var y = this.body[i][1];
    //         this.body[i] = [x-100, y, 0];
    //     } 
    //     if (this.body[i][2]==180){
    //         var x = this.body[i][0];
    //         var y = this.body[i][1];
    //         this.body[i] = [x, y+100, 0];
    //     } 
    //     if (this.body[i][2]==270){
    //         var x = this.body[i][0];
    //         var y = this.body[i][1];
    //         this.body[i] = [x+100, y, 0];
    //     } 
    //        if (this.positionX != null) {
    //            if (this.body[i][0] == this.positionX && this.body[i][1] == this.positionY){
    //                this.body[i][2] = dir
    //            }
    //            /*if (i == 0) {
    //                this.body[0][2] == dir
    //            }*/
    //        }
    //    }


        
    
    }
    }
}