import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  @ViewChild('exampleModal') modal!: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      this.openModal();
    }, 3000);
    
     setTimeout(() => {
      this.closeModal();
    }, 10000);
  }

  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    modalElement.setAttribute('aria-modal', 'true');
  }
  closeModal(){
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'none';
    modalElement.setAttribute('aria-modal', 'true');
  }
}
