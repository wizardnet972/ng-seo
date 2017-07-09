import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('about my page');
    meta.addTags([
      { name: 'author', content: 'shlomi levi' },
      { name: 'keywords', content: 'about, angular4, angular seo' },
      { name: 'description', content: 'this is demo seo in about' },
    ])
  }

  ngOnInit() {
  }

}
