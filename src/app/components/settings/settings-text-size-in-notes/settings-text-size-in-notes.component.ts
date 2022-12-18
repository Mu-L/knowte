import { Component, ViewEncapsulation } from '@angular/core';
import { BaseSettings } from '../../../core/base-settings';
import { Constants } from '../../../core/constants';

@Component({
    selector: 'app-settings-text-size-in-notes',
    templateUrl: './settings-text-size-in-notes.component.html',
    styleUrls: ['./settings-text-size-in-notes.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SettingsTextSizeInNotesComponent {
    constructor(private settings: BaseSettings) {}

    public noteZoomPercentages: number[] = Constants.noteZoomPercentages;

    public get selectedNoteZoomPercentage(): number {
        return this.settings.noteZoomPercentage;
    }

    public set selectedNoteZoomPercentage(v: number) {
        this.settings.noteZoomPercentage = v;
    }
}
