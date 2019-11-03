import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.css']
})
export class PencilComponent implements OnInit {

  constructor(private http: HttpClient, private bs: BackendService) { }
  pencils: PencilList[] = [];
  ngOnInit() {
      this.bs.getPencels().subscribe(m => {
        this.pencils = m;
      });
  }

}
interface PencilList {
  mystr: string;
}
