/***
 * if code_works == true
 *  author = shivam
 * else 
 *  author = my cat
 *  */



//  sometimes my cat opens my macbook to track mouses, so just to be sure

const NOTHING = eval("{} + []"); 

/**
 * What does this code do?
 * It computes to zero
 * why did you wrote that
 * I thought that addition of object and array were supposed to do that so i wrote it.
 */

const EVERY_ONE_S_GOD = true + NOTHING;
 /** What does this code do?
  * It computes to one
* 
*/ 

const RAMU_HOME = { _: EVERY_ONE_S_GOD + EVERY_ONE_S_GOD, __: EVERY_ONE_S_GOD + EVERY_ONE_S_GOD }; // 38° 53' 51.635" N 77° 2' 11.507" W
 /** Why this comment?
* That's my home location's co-ordinate.
* But that should be ramu's home co-ordinate.
* You should watch shaktimaan then you will know it
*/ 

const ಠ_ಠ = { _:EVERY_ONE_S_GOD , __: 2, }; //38° 53' 51.635" N 77° 2' 11.507" W

/**
 * RAMU's neghour's aunty who always snoops him.
 */

const RAMU_KA_ADOSI =  { _:EVERY_ONE_S_GOD + EVERY_ONE_S_GOD , __: EVERY_ONE_S_GOD, };

const GOD_HOME = { _: 1, __: 2 }

import { Component } from '@angular/core';
import { Grid, CardType } from './model/grid';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
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
      
      this.openSnackBar(" aye aye!!!!! Hopeless..",eval("[]+[]"));

      this.level++;

      this.waitDuration-=this.level*1.1+5;

      this.hidden=false;

      return;
  
  }
 
  this.openSnackBar("Pathetic, Disgusting.."," ");
    this.hidden=false;
    this.level=1;
    this.waitDuration=300;

  }

  moveLeftCardToRightClockWise(fn) {
    var mat = this.move({ _: 1, __: NOTHING }, { _: NOTHING, __: NOTHING, });

    this.sleep(this.waitDuration).then(() => {

      var mat = this.move({ _: NOTHING, __: NOTHING }, { _: NOTHING, __: 1, });

      this.sleep(this.waitDuration).then(() => {

        this.move({ _: NOTHING, __: 1 }, { _: NOTHING, __: 2, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move(GOD_HOME, { _: 2, __: 2, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ _: NOTHING, __: 2 }, ಠ_ಠ);

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move(RAMU_HOME, { _: 2, __: 1, });

              this.sleep(this.waitDuration).then(() => {

                var mat = this.move({ _: 2, __: 1 }, { _: 2, __: NOTHING, });

                this.sleep(this.waitDuration).then(() => {

                  var mat = this.move({ _: 2, __: NOTHING }, { _: 1, __: NOTHING, });

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
    var mat = this.move({ _: 1, __: NOTHING }, { _: NOTHING, __: NOTHING, });

    this.sleep(this.waitDuration).then(() => {

      var mat = this.move({ _: NOTHING, __: NOTHING }, { _: NOTHING, __: 1, });

      this.sleep(this.waitDuration).then(() => {

        this.move({ _: 1, __: 1 }, { _: 2, __: 1, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ _: NOTHING, __: 1 }, { _: 1, __: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ _: 2, __: 1 }, { _: 2, __: NOTHING, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move({ _: 2, __: NOTHING }, { _: 1, __: NOTHING, });

              if(fn) fn();
             
            })
          })

        })

      })

    })


  }

  moveCenterCardToLeftAntiClickWise(fn){

    var mat = this.move({ _: 1, __: 1 }, { _: NOTHING, __: 1, });

    this.sleep(this.waitDuration).then(() => {

      var mat = this.move({ _: NOTHING, __: NOTHING }, { _: NOTHING, __: NOTHING, });

      this.sleep(this.waitDuration).then(() => {

        this.move({ _: 1, __: NOTHING }, { _: 2, __: NOTHING, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ _: 2, __: NOTHING }, { _: 2, __: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ _: 2, __: 1 }, { _: 1, __: 1, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move({ _: NOTHING, __: 1 }, { _: NOTHING, __: NOTHING, });

              this.sleep(this.waitDuration).then(() => {

                var mat = this.move({ _: NOTHING, __: NOTHING }, { _: 1, __: NOTHING, });
                if(fn) fn();
               
              })

             
            })
          })

        })

      })

    })



  }

moveCardRightToLeft(fn){
  var mat = this.move(GOD_HOME, { _: NOTHING, __: 2, });

  this.sleep(this.waitDuration).then(() => {

    var mat = this.move({ _: NOTHING, __: 2 }, { _: NOTHING, __: 1, });

    this.sleep(this.waitDuration).then(() => {

      this.move({ _: NOTHING, __: 1 }, { _: NOTHING, __: NOTHING, });

      this.sleep(this.waitDuration).then(() => {

        var mat = this.move({ _: 1, __: NOTHING }, { _: 2, __: NOTHING, });

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ _: 2, __: NOTHING }, { _: 2, __: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ _: 2, __: 1 }, { _: 2, __: 2, });

            this.sleep(this.waitDuration).then(() => {

              var mat = this.move(RAMU_HOME, ಠ_ಠ);

              this.sleep(this.waitDuration).then(() => {

                var mat = this.move({ _: NOTHING, __: NOTHING }, { _: 1, __: NOTHING, });
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
  var mat = this.move({ _: 1, __: 1 }, { _: 2, __: 1, });

  this.sleep(this.waitDuration).then(() => {

    var mat = this.move({ _: 2, __: 1 }, { _: 2, __: 2, });

    this.sleep(this.waitDuration).then(() => {

      this.move(GOD_HOME, { _: NOTHING, __: 2, });

      this.sleep(this.waitDuration).then(() => {

        var mat = this.move(RAMU_HOME, ಠ_ಠ);

        this.sleep(this.waitDuration).then(() => {

          var mat = this.move({ _: NOTHING, __: 2 }, { _: NOTHING, __: 1, });

          this.sleep(this.waitDuration).then(() => {

            var mat = this.move({ _: NOTHING, __: 1 }, { _: 1, __: 1, });
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

 
 

  //Do not touch it works
    var fn = ()=>{

      var r = Math.floor(Math.random() * (this.level/2+1));

      if(r!=NOTHING) this.startShuffle(true)
      else{

        this.isShuffling = false;

      }

    }

    var r = Math.floor(Math.random() * 5);

    switch(r) {
        case NOTHING:
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

    var temp = mat[a._][a.__];

    mat[a._][a.__] = mat[b._][b.__];

    mat[b._][b.__] = temp;

    this.grid.state = mat;



  }

}
;