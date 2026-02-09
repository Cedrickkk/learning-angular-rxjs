import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('learning-angular-rxjs');

  ngOnInit(): void {
    interval(1000).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Do something here'),
      error: (err) => console.log(err),
    });
  }
}
