import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    #player{
       text-align: center;
    }

    .range-container{
      display: flex;
      justify-content: center;
    }

    .range-container input{
      width:200px;
      margin-bottom: 10px;
    }
  `]
})
export class AppComponent {
    lottieConfig: Object;
    anim: any;
    animationSpeed: number = 1;
 
    constructor() {
        this.lottieConfig = {
            path: '../assets/pinjump.json',
            autoplay: true,
            loop: true
        };
    }
 
    handleAnimation(anim: any) {
        this.anim = anim;
    }
 
    stop() {
        this.anim.stop();
    }
 
    play() {
        this.anim.play();
    }
 
    pause() {
        this.anim.pause();
    }
 
    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }
}
