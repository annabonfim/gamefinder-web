import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GameResponse {
  name: string;
  rating: number;
  ratingCount: number;
  releaseYear: number;
  recommendation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/games';

  getRecommendation(gameName: string): Observable<GameResponse> {
    return this.http.get<GameResponse>(
      `${this.baseUrl}/recommend?name=${encodeURIComponent(gameName)}`
    );
  }
}
