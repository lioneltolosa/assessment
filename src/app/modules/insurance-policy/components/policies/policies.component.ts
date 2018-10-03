import { Component, OnInit } from '@angular/core';
import { Config, PoliciesService } from './policies.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  providers: [ PoliciesService ],
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

    config: Config;

    constructor(private configService: PoliciesService) { }

    showConfig() {
        this.configService.getConfig()
          .subscribe((data: Config) => this.config = {
            policiesUrl: data['policiesUrl']
          });
      }

    ngOnInit() {
    }

}
