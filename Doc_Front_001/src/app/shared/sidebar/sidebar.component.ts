import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, AfterViewInit {
  
  // @ViewChild('toggle1',{static:false}) items!: QueryList<ElementRef>;
  // @ViewChild('toggle1',{read:ElementRef}) items!: QueryList<ElementRef>;
  @ViewChild('nameInput',{static:false, read: ElementRef}) items!:any;
  
  // @ViewChild('toggle1') toggle1!:ElementRef;
  @ViewChild('onceCapital') onceCapital!:ElementRef;
  
  ngOnInit(): void {
    
    
  }
  
  ngAfterViewInit(): void {
    console.log
    
    const elementRefArray = this.items.toArray();
    
    // Accede a los elementos nativos si es necesario (con precaución)
    // elementRefArray.forEach(itemRef => {
    //   console.log(itemRef.nativeElement); 
    // });

  }
  // ngAfterViewInit() {
  //   // Acceder a cada ElementRef en la QueryList
  //   this.items.forEach((elRef: ElementRef, index: number) => {
  //     console.log(`Elemento ${index}:`, elRef.nativeElement.textContent);
  //     // Manipulación del DOM (ejemplo)
  //     elRef.nativeElement.style.color = 'blue';
  //   });
  // }

  clicEventMenu (event:any) {
    console.log(this.items)

    // this.items.forEach( ( elRef: ElementRef, index: number )=>{
    //           console.log(`Elemento ${index}:`, elRef.nativeElement.textContent);

    // })




    // // event.preventDefault()
    // this.toggle1.nativeElement.classList.toggle('dropdown-menu-toggle')
    // // console.log('evento')
    // if( this.toggle1.nativeElement.classList.contains('dropdown-menu-toggle') ){
    //   this.onceCapital.nativeElement.classList.remove('menuDesplegadoActivo');
    // }else{
    //   this.onceCapital.nativeElement.classList.add('menuDesplegadoActivo');
    // }
  }

  linkActivo ( event:any ) {
    const activo = event.target.classList.value;

    console.log('contiene', activo)
  }

}
