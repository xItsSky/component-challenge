import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";

export const COMPONENTS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent
      },
    ]
  },
];
