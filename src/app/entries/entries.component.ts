import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry.model';
import { Router } from '@angular/router';
import { EntryService } from '../entry.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  providers: [EntryService]
})
export class EntriesComponent implements OnInit {
 entries: FirebaseListObservable<any[]>;
 currentRoute: string = this.router.url;

 constructor(private router: Router, private entryService: EntryService) {}

 ngOnInit() {
   this.entries = this.entryService.getEntries();
 }

 goToDetailPage(clickedEntry) {
   this.router.navigate(['entries', clickedEntry.$key]);
 }
}
