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
import { TheoriesComponent } from './theories/theories.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CardTimelineComponent } from './timeline/card-timeline/card-timeline.component';
import { AddTimelineEventComponent } from './timeline/add-timeline-event/add-timeline-event.component';
import { DateTimelineComponent } from './timeline/date-timeline/date-timeline.component';
import { EditTimelineEventComponent } from './timeline/edit-timeline-event/edit-timeline-event.component';
import { RouterModule } from '@angular/router';
import { AddSuspectComponent } from './suspects/add-suspect/add-suspect.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule
    ],
    declarations: [
    EvidencesComponent,
    BoxTemplateComponent,
    SuspectsComponent,
    SuspectTemplateComponent,
    PictureComponent,
    DescriptionComponent,
    TheoriesComponent,
    TimelineComponent,
    CardTimelineComponent,
    AddTimelineEventComponent,
    DateTimelineComponent,
    EditTimelineEventComponent,
    AddSuspectComponent]
})
export class TabsModule { }
