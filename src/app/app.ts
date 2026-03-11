import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Searchbar } from './searchbar/searchbar';
import { ApiService, GameResponse } from './service/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Searchbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private apiService = inject(ApiService);

  game = signal<GameResponse | null>(null);
  loading = signal(false);
  errorMessage = signal('');

  onSearchGame(gameName: string) {
    this.loading.set(true);
    this.errorMessage.set('');
    this.game.set(null);

    this.apiService.getRecommendation(gameName).subscribe({
      next: (response) => {
        this.game.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Erro ao buscar recomendação.');
        this.loading.set(false);
      }
    });
  }
}
