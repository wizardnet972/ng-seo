import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Homepage!');
    meta.addTags([
      { name: 'author', content: 'wizardnet972' },
      { name: 'keywords', content: 'angular4, angular seo' },
      { name: 'description', content: 'this is demo seo' },
    ]);
  }

  ngOnInit() {
  }

}
