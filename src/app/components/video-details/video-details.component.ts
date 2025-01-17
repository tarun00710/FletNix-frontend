import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VideoService } from '../../services/videos/videos.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-video-details',
  standalone:true,
  imports: [CommonModule,DatePipe,RouterLink],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css'
})
export class VideoDetailsComponent {
  video: any = null;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const showId = this.route.snapshot.paramMap.get('showId');
    if (showId) {
      this.videoService.getVideoDetailsById(showId).subscribe((videoDetails) => {
        console.log(videoDetails,"vd");
        
        this.video = videoDetails;
      });
    }
  }
}
