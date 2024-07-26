import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  tests: Test[] = [];
  title = 'onlinestoreng';

  constructor(private testService : TestService){}

  ngOnInit(): void {
    this.testService.getAll().subscribe(data =>{
      this.tests = data;
    })
    //this.tests.push({ id: 1, testData: "TCh" });
  }

  onButtonClick() : void {
    let test = new Test();
    test.id = 0;
    test.data = "22";

    this.testService.add(test).subscribe(data => {
      console.log("Data is saved");
    })
  }
}
