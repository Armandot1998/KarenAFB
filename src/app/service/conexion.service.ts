import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {// creando clase para que pueda dar el servicio de conexion 
  // crea un varialble privada de tipo Collection
  private itemsCollection: AngularFirestoreCollection<Item>;
  // variable items de tipo observable va a traer el arreglo de item
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    // se van almacenar en la variable items y esta variable va a ser un array
    //this.itemsCollection = afs.collection<Item>('items');
    this.itemsCollection = afs.collection<Item>('items');
    //agregue y guarde en itemsCollection
    //this.items = this.itemsCollection.valueChanges();
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))

        );    }
listaItem() {
  return this.items;
}
addItem(items: Item) {
  this.itemsCollection.add(items);

}
}