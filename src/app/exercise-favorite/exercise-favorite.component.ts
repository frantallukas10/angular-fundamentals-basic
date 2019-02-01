import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercise-favorite",
  templateUrl: "./exercise-favorite.component.html",
  styleUrls: ["./exercise-favorite.component.scss"]
})
export class ExerciseFavoriteComponent implements OnInit {
  isFavorite: boolean;
  condition: string;
  constructor() {}

  ngOnInit() {
    this.isFavorite = true;
    this.condition = "like";
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.condition = this.isFavorite ? "like" : "dislike";
  }
}
