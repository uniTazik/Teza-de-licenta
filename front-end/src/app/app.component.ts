import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

      this.myParams = {
        particles: {
            number: {
                value: 80,
            },
            color: {
                value: '#DBD0C1'
            },
            shape: {
                type: 'circle',
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: '#DBD0C1',
              opacity: 0.4,
              width: 1
            },
            size: {
              value: 4
            }
     }
   };
  }

}
