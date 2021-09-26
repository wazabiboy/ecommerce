import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  imgs: string[] = ["https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", "https://images.unsplash.com/photo-1603755089999-8ce25221f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", "https://images.unsplash.com/photo-1555445122-bc2ba06500be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", "https://images.unsplash.com/photo-1572006169383-3588cb15361f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" ]

  constructor() { }

  ngOnInit(): void {
  }

}
