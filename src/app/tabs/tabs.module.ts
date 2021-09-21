import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EvidencesComponent } from './evidences/evidences.component';
import { BoxTemplateComponent } from './evidences/box-template/box-template.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { SuspectTemplateComponent } from './suspects/suspect-template/suspect-template.component';
import { PictureComponent } from './suspects/suspect-template/picture/picture.component';
import { DescriptionComponent } from './suspects/suspect-template/description/description.component';
import { ConectionsComponent } from './suspects/suspect-template/conections/conections.component';
import { TheoriesComponent } from './theories/theories.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CardTimelineComponent } from './timeline/card-timeline/card-timeline.component';
import { AddTimelineEventComponent } from './timeline/add-timeline-event/add-timeline-event.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
    EvidencesComponent,
    BoxTemplateComponent,
    SuspectsComponent,
    SuspectTemplateComponent,
    PictureComponent,
    DescriptionComponent,
    ConectionsComponent,
    TheoriesComponent,
    TimelineComponent,
    CardTimelineComponent,
    AddTimelineEventComponent]
})
export class TabsModule { }
