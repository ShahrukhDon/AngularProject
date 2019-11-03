import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  constructor(private bs: BackendService, private http: HttpClient) { }
  workouts: WorkoutList[] = [];
  ngOnInit() {
    this.bs.getWorkout().subscribe(m => {
        this.workouts = m;
    });
  }
  delMe(id: number) {
    if (confirm('Are you sure you want to delete this !!!')) {
      this.bs.getDelete(id).subscribe(m => {
        this.workouts = m;
      });
      this.ngOnInit();
    }
  }

}
interface WorkoutList
{
  workoutID: number;
  date: string;
  distanceInMeters: number;
  timeInSeconds: number;
}
