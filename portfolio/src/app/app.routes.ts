import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ResourcesComponent } from './Pages/resources/resources.component';
import { SolutionsComponent } from './Pages/solutions/solutions.component';
import { ComponentsComponent } from './Pages/components/components.component';
import { ZeroV1FlexviewComponent } from './components/display/FLEX/zero-v1-flexview/zero-v1-flexview.component';
import { GraphicsComponent } from './Pages/graphics/graphics.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components', component: ComponentsComponent},
  {path: 'graphics', component: GraphicsComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'components/view', component: ZeroV1FlexviewComponent},
  {path: 'components/view/new', component: ZeroV1FlexviewComponent},
  {path: 'components/view:query:id', component: ZeroV1FlexviewComponent},
];
