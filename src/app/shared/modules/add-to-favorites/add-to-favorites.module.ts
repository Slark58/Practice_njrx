import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {AddToFavoritesComponent} from './components/add-to-favorites/add-to-favorites.component'
import {AddToFavoritesService} from './service/addToFavorites.service'
import {EffectsModule} from '@ngrx/effects'
import {AddToFavoritesEffect} from './store/effects/addToFavorite.effect'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  exports: [AddToFavoritesComponent],
  declarations: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
