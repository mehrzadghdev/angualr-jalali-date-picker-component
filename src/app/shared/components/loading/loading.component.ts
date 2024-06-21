import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  public loadingOptions: AnimationOptions = { path: 'assets/lottie/loading.json' }
}
