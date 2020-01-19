import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'demo-app-two';

  checkOne(param: number) {

    switch (param) {
    case 12:
      return param;
      break;

    default:
      console.log('parameter different than 12');
      break;
    }
  }

  ngOnInit() {
    console.log('testing the demo-app-two linting!');
    const element = 'test';
    console.log(element);

    // const arrayA = [1, 23];
    // for (const el of arrayA) {
    //   console.log(el);
    // }
  }
}
