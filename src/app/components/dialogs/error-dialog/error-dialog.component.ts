import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '../../../core/constants';
import { Desktop } from '../../../core/desktop';
import { FileSystem } from '../../../core/file-system';
@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ErrorDialogComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<ErrorDialogComponent>,
        private desktop: Desktop,
        private fileSystem: FileSystem
    ) {
        this.dialogRef.disableClose = true;
    }

    public ngOnInit(): void {}

    public viewLog(): void {
        // See: https://stackoverflow.com/questions/30381450/open-external-file-with-electron
        this.desktop.showInFolder(this.fileSystem.combinePath([this.fileSystem.applicationDataDirectory(), 'logs', Constants.logFileName]));
    }
}
