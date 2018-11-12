import { Component } from '@angular/core';
import { Grid, CardType } from './model/grid';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catchtheramu';
  grid: Grid = new Grid();
  waitDuration =300;
  isShuffling:boolean=false;
  hidden = false;
  level = 1;

  constructor(public snackBar: MatSnackBar) {}

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  } 

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition:'bottom'
    });
  }

  cardClicked(e){

    if(!this.hidden || this.isShuffling || e == CardType.NORMAL) return;

    if(e==CardType.RAMU) {
      
      this.openSnackBar("CORRECT!!!!!","");

      this.level++;

      this.waitDuration-=this.level*1.1+5;

      this.hidden=false;

      return;
  
  }
 
  this.openSnackBar("Oh! You are wrong"," ");
    this.hidden=false;
    this.level=1;
    this.waitDuration=300;

  }

  moveLeftCardToRightClockWise(fn) {
    var mat = this.move({ x: 1, y: 0 }, { x: 0, y: 0, });

    this.sleep(this.waitDuration).then(() => {

      var mat = this.move({ x: 0, y: 0 }, { x: 0, y: 1, });

      this.sleep(this.waitDuration).then(() => {

        this.move({ x: 0, y: 1 }, { x: 0, y: 2, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ x: 1, y: 2 }, { x: 2, y: 2, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ x: 0, y: 2 }, { x: 1, y: 2, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move({ x: 2, y: 2 }, { x: 2, y: 1, });

              this.sleep(this.waitDuration).then(() => {

                var mat = this.move({ x: 2, y: 1 }, { x: 2, y: 0, });

                this.sleep(this.waitDuration).then(() => {

                  var mat = this.move({ x: 2, y: 0 }, { x: 1, y: 0, });

                  if(fn) fn();

                })
              })

            })
          })

        })

      })

    })


  }


  
  moveCenterCardToleft(fn) {
    var mat = this.move({ x: 1, y: 0 }, { x: 0, y: 0, });

    this.sleep(this.waitDuration).then(() => {

      var mat = this.move({ x: 0, y: 0 }, { x: 0, y: 1, });

      this.sleep(this.waitDuration).then(() => {

        this.move({ x: 1, y: 1 }, { x: 2, y: 1, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ x: 0, y: 1 }, { x: 1, y: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ x: 2, y: 1 }, { x: 2, y: 0, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move({ x: 2, y: 0 }, { x: 1, y: 0, });

              if(fn) fn();
             
            })
          })

        })

      })

    })


  }

  moveCenterCardToLeftAntiClickWise(fn){

    var mat = this.move({ x: 1, y: 1 }, { x: 0, y: 1, });

    this.sleep(this.waitDuration).then(() => {

      var mat = this.move({ x: 0, y: 0 }, { x: 0, y: 0, });

      this.sleep(this.waitDuration).then(() => {

        this.move({ x: 1, y: 0 }, { x: 2, y: 0, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ x: 2, y: 0 }, { x: 2, y: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ x: 2, y: 1 }, { x: 1, y: 1, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move({ x: 0, y: 1 }, { x: 0, y: 0, });

              this.sleep(this.waitDuration).then(() => {

                var mat = this.move({ x: 0, y: 0 }, { x: 1, y: 0, });
                if(fn) fn();
               
              })

             
            })
          })

        })

      })

    })



  }

moveCardRightToLeft(fn){
  var mat = this.move({ x: 1, y: 2 }, { x: 0, y: 2, });

  this.sleep(this.waitDuration).then(() => {

    var mat = this.move({ x: 0, y: 2 }, { x: 0, y: 1, });

    this.sleep(this.waitDuration).then(() => {

      this.move({ x: 0, y: 1 }, { x: 0, y: 0, });

      this.sleep(this.waitDuration).then(() => {

        var mat = this.move({ x: 1, y: 0 }, { x: 2, y: 0, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ x: 2, y: 0 }, { x: 2, y: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ x: 2, y: 1 }, { x: 2, y: 2, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move({ x: 2, y: 2 }, { x: 1, y: 2, });

              this.sleep(this.waitDuration).then(() => {

                var mat = this.move({ x: 0, y: 0 }, { x: 1, y: 0, });
                if(fn) fn();
               
              })
  

             
            })

           
          })
        })

      })

    })

  })




}



moveCenterToRight(fn){
  var mat = this.move({ x: 1, y: 1 }, { x: 2, y: 1, });

  this.sleep(this.waitDuration).then(() => {

    var mat = this.move({ x: 2, y: 1 }, { x: 2, y: 2, });

    this.sleep(this.waitDuration).then(() => {

      this.move({ x: 1, y: 2 }, { x: 0, y: 2, });

      this.sleep(this.waitDuration).then(() => {

        var mat = this.move({ x: 2, y: 2 }, { x: 1, y: 2, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ x: 0, y: 2 }, { x: 0, y: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ x: 0, y: 1 }, { x: 1, y: 1, });
            if(fn) fn();
          })
        })

      })

    })

  })




}







  startShuffle(bypass) {

    this.hidden=true;

    this.sleep(this.waitDuration).then(()=>{


      
    if(!bypass && this.isShuffling) return;

    this.isShuffling = true;

 
 

    var fn = ()=>{

      var r = Math.floor(Math.random() * (this.level/2+1));

      if(r!=0) this.startShuffle(true)
      else{

        this.isShuffling = false;

      }

    }

    var r = Math.floor(Math.random() * 5);

    switch(r) {
        case 0:
            this.moveCenterCardToleft(fn);
            break;

        case 1:
        this.moveLeftCardToRightClockWise(fn); 
            break;

        case 2:
        this.moveCenterCardToLeftAntiClickWise(fn);
            break;

        case 3:
        this.moveCardRightToLeft(fn); 
            break;
        case 4: 
        this.moveCenterToRight(fn);
        break;

    }

  })


  }

  move(a, b) {

    var mat = this.grid.state;

    console.log(mat)

    var temp = mat[a.x][a.y];

    mat[a.x][a.y] = mat[b.x][b.y];

    mat[b.x][b.y] = temp;

    this.grid.state = mat;



  }

}
