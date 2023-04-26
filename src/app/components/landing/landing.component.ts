import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  text = "I am a Front";
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseBeforeDelete = 300;
  pauseBeforeType = 1000;
  showCursor = true;

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    if (typewriter) {
      const typing = setInterval(() => {
        if (i < this.text.length) {
          typewriter.innerHTML += this.text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            this.deleteWriter();
          }, this.pauseBeforeDelete);
        }
      }, this.typingSpeed);
    }
  }

  deleteWriter() {
    const typewriter = document.getElementById('typewriter');
    let i = this.text.indexOf("Front End") + "Front End".length - 3;
    if (typewriter) {
      const deleting = setInterval(() => {
        if (i > 0) {
          typewriter.innerHTML = typewriter.innerHTML.slice(0, -1);
          i--;
        } else {
          clearInterval(deleting);
          setTimeout(() => {
            this.typeSoftwareEngineer();
          }, this.pauseBeforeType);
        }
      }, this.deletingSpeed);
    }
  }

  typeSoftwareEngineer() {
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    if (typewriter) {
      const typing = setInterval(() => {
        if (i < "Software Engineer".length) {
          typewriter.innerHTML += "Software Engineer".charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, this.typingSpeed);
    }
  }
  
}
