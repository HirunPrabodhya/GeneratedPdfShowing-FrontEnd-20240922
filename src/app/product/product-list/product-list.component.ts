import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IProduct } from '../model/product';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,PdfViewerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products$!:Observable<IProduct[]>;
  pdfUrl:string = '';
  private service:ProductService = inject(ProductService);
  ngOnInit(): void {
   this.products$ = this.service.getAllProducts();
                
  }
 
  printPdf(){
    this.service.createPdf()
                .pipe(
                      tap(result=>{
                      if (typeof(window) !== undefined && typeof(document) !== undefined){
                        const url = window.URL.createObjectURL(result);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = 'ProductList.pdf';
                        link.click();
                      }
                        
                    })
                  )
                  .subscribe();
  }
  previewPdf(){
    this.service.createPdf()
                .pipe(
                      tap(result=>{
                        if (typeof(window) !== undefined && typeof(document) !== undefined){
                          let url = window.URL.createObjectURL(result);
                          this.pdfUrl = url;
                        }
                      })
                    )
                    .subscribe();
  }

}
