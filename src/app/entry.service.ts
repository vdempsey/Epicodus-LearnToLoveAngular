import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EntryService {
  entries: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.entries = database.list('entries');
   }

  getEntries() {
    return this.entries;
  }

  addEntries(newEntry: Entry) {
    this.entries.push(newEntry);
  }

  getEntryById(entryId: string) {
    return this.database.object('entries/' + entryId);
  }

  updateEntry(localUpdatedEntry) {
    let entryEntryInFirebase = this.getEntryById(localUpdatedEntry.$key);
    entryEntryInFirebase.update({title: localUpdatedEntry.title,
                                 date: localUpdatedEntry.date,
                                 description: localUpdatedEntry.description});
  }

  deleteEntry(localEntryToDelete) {
    let entryEntryInFirebase = this.getEntryById(localEntryToDelete.$key);
    entryEntryInFirebase.remove();
  }

}
