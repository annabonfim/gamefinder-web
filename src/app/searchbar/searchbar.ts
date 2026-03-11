import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css',
})
export class Searchbar {
  gameName = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    const trimmedName = this.gameName.trim();

    if (!trimmedName) {
      return;
    }

    this.search.emit(trimmedName);
  }
}
