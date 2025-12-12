import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  @ViewChild('toggle1') toggle1!:ElementRef;

  ngOnInit(): void {

  }

  clicEventMenu (event:any) {
    event.preventDefault()
    this.toggle1.nativeElement.classList.toggle('dropdown-menu-toggle')
    // console.log('evento')
  }

}
