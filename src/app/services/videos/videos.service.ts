import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'https://fletnix-backend-f574.onrender.com/api/videos'; 

  constructor(private http: HttpClient) {}

  getVideos(page: number, searchQuery: string = '', age: number = 15): Observable<{ videos: any[] }> {
    const queryParams = `page=${page}&age=${age}&search=${encodeURIComponent(searchQuery)}`;
    return this.http.get<{ videos: any[] }>(`${this.baseUrl}?${queryParams}`);
  }
  

  getVideoDetailsById(showId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${showId}`);
  }
  
}
