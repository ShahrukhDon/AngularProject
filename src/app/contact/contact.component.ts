import { Post } from './../posts';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  posts: PostList[] = [];
  loading = true;
  constructor(private http: HttpClient, private bs: BackendService) { }
  ngOnInit() {
    this.bs.getMovies().subscribe(m => {
      this.posts = m;
      this.loading = false;
    }
    );
  }
  getmeindex(index: string) {
    alert(index);
  }

}
interface PostList {
  title: string;
  body: string;
  id: number;
  userId: number;
}
