import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { DemoService } from 'src/app/shared/services/demo.service';
import * as DemoModel from '../../../../shared/models/demo.model';

@Component({
  selector: 'app-demo-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DemoDefaultComponent implements OnInit {

  weather: DemoModel.Demo.OpenWeatherMap;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.demoService.getWeather().subscribe(
      (response: DemoModel.Demo.OpenWeatherMap) => {
        this.weather = response;
        console.log(this.weather);
      }, error => {
        console.log(error);
      }
    ).add(() => {
      // Do something
    });
  }

}
