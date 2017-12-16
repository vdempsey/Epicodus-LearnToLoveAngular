import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  providers: [EntryService]
})
export class MeComponent implements OnInit {

  constructor(private entryService: EntryService) { }

 ngOnInit() {
 }

 submitForm(title: string, data: string, description: string) {
   let newEntry: Entry = new Entry(title, data, description);
   this.entryService.addEntries(newEntry);
 }

}
