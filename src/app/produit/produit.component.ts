import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
listes: object[]; 
listeTitle: string; 
idForlistTitle: number; 
  constructor() { }

  ngOnInit() {
    this.idForlistTitle=8; 
    this.listeTitle='' ; 
    this.listes= [ 
      { 'id': 1, 
      'title': 'Développement d\'application mobile','prix' : 250000,
    },
    { 'id': 2, 
      'title': 'Infographie','prix' : 100000,
    },
    { 'id': 3, 
      'title': 'Gestion de Projet','prix' : 300000,
    },
    { 'id': 4, 
      'title': 'Conception de site web','prix' : 500000,
    },
    { 'id': 5, 
      'title': 'Marketing','prix' : 350000,
    },
    {'id': 6, 
    'title': 'Projet E-santé','prix' : 2000000,
    }
    ]
  }
  ajouterTitle(): void {
    if(this.listeTitle.trim().length === 0)
    {
      return ; 
    }

    this.listes.push({
      id:this.idForlistTitle, title: this.listeTitle, prix:500000,
    })
    this.idForlistTitle++; 
    this.listeTitle=''; 
    alert("votre formation a bien été  enregistrée!");
  }

  suppliste(id:number ): void {
    this.listes=this.listes.filter(liste => liste.id !== id); 
    alert("votre formation a bien été  retirée!");
  }



}
