import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  closeResult = '';
  notes: any = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    let color = `background-color: ${this.getRandomColor()}`;
    this.notes.push({ id: this.getRandonId(), title: 'Test Note', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est massa, egestas at fermentum nec, ullamcorper vitae diam. ', color: color })
  }
  getRandomColor() {
    let letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
  getRandonId() {
    let S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }
  deleteNote(id) {
    this.notes = [...this.notes.filter((item) => item.id !== id)]
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  notesSave(title, content) {
    console.log(title)
    console.log(content)
    if (title != '' && content != '') {
      let color = `background-color: ${this.getRandomColor()}`;
      this.notes.push({ id: this.getRandonId(), title: title, content: content, color: color });
      this.notes = [...this.notes]
    }

  }

}
