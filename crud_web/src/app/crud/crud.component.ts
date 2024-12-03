import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductoModel } from '../../model/producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  title = 'crud_web';

  productObj:ProductoModel = new ProductoModel();
  productForm:FormGroup = new FormGroup({});
  productList:ProductoModel[] = [];

  constructor()
  {
    this.crearFormulario();
    const oldData = localStorage.getItem("dataProd");
    if(oldData!=null)
    {
      const parseData = JSON.parse(oldData);
      this.productList = parseData;
    }    
  }

  crearFormulario()
  {
   this.productForm = new FormGroup({
    descripcion: new FormControl(this.productObj.descripcion, [Validators.required]),
    precio: new FormControl(this.productObj.precio, [Validators.required, Validators.minLength(3)])
   });
  }

  onSave(){
    const oldData = localStorage.getItem("dataProd");
    if(oldData!=null)
    {
      const parseData = JSON.parse(oldData);
      this.productForm.controls['id'].setValue(parseData.length+1);
      this.productList.unshift(this.productForm.value);
    }
    else
    {
      this.productList.unshift(this.productForm.value);
    }
    localStorage.setItem("dataProd", JSON.stringify(this.productList));
    this.limpiar();
  }

  onEdit(item:ProductoModel)
  {
    this.productObj=item;
    this.crearFormulario();
  }

  limpiar()
  {
    this.productObj=new ProductoModel;
    this.crearFormulario();
  }

  onUpdate()
  {
    const registro = this.productList.find(m=>m.id == this.productForm.controls['id'].value);
    if(registro != undefined){
      registro.descripcion = this.productForm.controls['descripcion'].value;
      registro.precio = this.productForm.controls['precio'].value;
    }
    localStorage.setItem("dataProd", JSON.stringify(this.productList));
    this.limpiar();
  }

  onDelete(id:number)
  {
    const borrar = confirm("¿Está seguro de eliminar este registro?");
    if (borrar)
      {
        const indice = this.productList.findIndex(m=>m.id == id);
        this.productList.splice(indice,1);
      }
      localStorage.setItem("dataProd", JSON.stringify(this.productList));
  }
}
