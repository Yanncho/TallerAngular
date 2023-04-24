import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { dataSeries } from './dataSeries';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }
  seriesL: Array<Series>=[];
  getSeries(){
    this.seriesService.getSeries().subscribe(series => {
      this.seriesL = series;});
    }
  ngOnInit() {
    this.getSeries();
  }

}
