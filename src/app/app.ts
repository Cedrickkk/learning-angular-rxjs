import { Component, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('learning-angular-rxjs');
  private count = signal(1);
  private count$ = toObservable(this.count);

  interval$ = interval(1000);
  intervall = toSignal(this.interval$, { initialValue: 0 });

  private custom$ = new Observable((subscriber) => {
    subscriber.next('Hello');
    subscriber.next('World');

    const timer = setTimeout(() => {
      subscriber.next({ message: 'Value emitted from custom  Observable' });
      subscriber.complete();
    }, 1000);

    return () => clearTimeout(timer);
  });

  ngOnInit(): void {
    // this.count$.subscribe((data) => console.log(data));
    this.custom$.subscribe((val) => console.log(val));
  }
}
