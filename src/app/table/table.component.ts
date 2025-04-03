import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

  data = [
    {
      id: 1,
      title: 'Java',
      description: "It's partially static",
      status: true,
    },
    {
      id: 2,
      title: 'Python',
      description: "It's dynamically typed",
      status: true,
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Primarily used for web development',
      status: true,
    },
    {
      id: 4,
      title: 'C++',
      description: 'A powerful systems programming language',
      status: true,
    },
    {
      id: 5,
      title: 'C#',
      description: 'Used extensively in .NET framework',
      status: true,
    },
    {
      id: 6,
      title: 'Ruby',
      description: 'Focuses on simplicity and productivity',
      status: false,
    },
    {
      id: 7,
      title: 'Go',
      description: 'Created by Google for concurrency and scalability',
      status: true,
    },
    {
      id: 8,
      title: 'Swift',
      description: "Apple's programming language for iOS and macOS",
      status: true,
    },
    {
      id: 9,
      title: 'PHP',
      description: 'Widely used for server-side web development',
      status: true,
    },
    {
      id: 10,
      title: 'Kotlin',
      description: 'Interoperable with Java and concise syntax',
      status: false,
    },
  ];

  deleting(id:number) {
    this.data=this.data.filter((_,index)=> _.id!=id)
  }
}
