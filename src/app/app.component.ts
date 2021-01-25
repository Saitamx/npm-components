import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase-test';
  data = {
    documentCollection: [
      {
        created: new Date(),
        createdBy: 'Demo user',
        ezshareId: '0123-4567-89',
        id: 45,
        name: 'example.pdf',
        type: 'MainDocument',
        version: '0.1',
      },
    ],
    historyDocumentCollection: [],
  };
  settings = {
    dateFormat: 'dd MMM yyyy',
    disclosureResponse: '',
    documentHistoryTypesCollection: ['MainDocument'],
    documentRestriction: {
      allowedExtensions: ['.pdf'],
      maxFileSize: 4194304,
    },
    expanded: true,
    limit: 1,
    readonly: false,
  };
}
