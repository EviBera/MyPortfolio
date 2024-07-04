import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mpp-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  markDownContent: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/badges.md', {responseType: 'text'}).subscribe(data => {
      this.markDownContent = data;
    });
  }

}
