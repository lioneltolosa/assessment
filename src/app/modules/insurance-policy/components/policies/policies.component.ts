import { Component, OnInit } from '@angular/core';
import { PoliciesService } from './policies.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  providers: [ PoliciesService ],
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

    characters: Observable<any[]>;
    columns: string[];

    constructor(private configService: PoliciesService) { }

    ngOnInit() {
        this.columns = this.configService.getColumns();

        this.characters = this.configService.getCharacters();
    }
}
