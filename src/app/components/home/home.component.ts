import { Component, OnInit } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';
import { VideoService } from '../../services/videos/videos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  filteredVideos:any[] = []
  totalPages: number = 0;
  currentPage:number = 0
  selectedType:string = ""
  searchQuery:string = ""
  isLoading: boolean = false;
  private searchSubject: Subject<string> = new Subject<string>(); // Debounce Subject

  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    this.loadVideos();
    this.searchSubject
    .pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((query) => {
      this.searchQuery = query;
      this.search();
    });
  }

  getUserAgeFromToken(): number {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken:any = jwtDecode(token);
      return decodedToken.age;  
    }
    return 0; 
  }
  loadVideos(): void {
    this.isLoading = true
    const userAge = this.getUserAgeFromToken();
    this.videoService.getVideos(this.currentPage,this.searchQuery,userAge).subscribe((response: any) => {
      this.videos = response.videos;
      this.filteredVideos = response.videos;
      this.totalPages = response.totalPages;  
      this.currentPage = response.currentPage; 
      this.applyFilter()
      this.isLoading = false
    });
  }
  applyFilter(): void {
    if (this.selectedType) {
      const filteredVideos = this.videos.filter(
        (video) => video.type === this.selectedType
      );
      this.filteredVideos = filteredVideos;
    } else
    this.filteredVideos =this.videos
  }

  goToDetails(showId: string): void {
    this.router.navigate(['/details', showId]);
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadVideos();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadVideos();
    }
  }

  onFilterChange(): void {
    this.applyFilter();
  }

  search(): void {
    this.currentPage = 0;
    this.loadVideos();
  }
  onSearchInputChange(query: string): void {
    this.searchSubject.next(query); // Push input value to the Subject
  }
  
}
