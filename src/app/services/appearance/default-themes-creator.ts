import { Injectable } from '@angular/core';
import { Theme } from './theme/theme';
import { ThemeCoreColors } from './theme/theme-core-colors';
import { ThemeCreator } from './theme/theme-creator';
import { ThemeNeutralColors } from './theme/theme-neutral-colors';

@Injectable()
export class DefaultThemesCreator {
    private creator: ThemeCreator = new ThemeCreator('Digimezzo', 'digimezzo@outlook.com');

    private darkColors: ThemeNeutralColors = new ThemeNeutralColors(
        '#242424', // background
        '#fff', // primaryText
        '#6e6e6e', // secondaryText
        '#454545', // separator
        '#383838', // contextMenuBackground
        '#fff', // contextMenuPrimaryText
        '#7e7e7e', // contextMenuSecondaryText
        '#565656', // contextMenuSeparator
        'rgba(255, 255, 255, 0.03)', // hoverBackground
        'rgba(255, 255, 255, 0.06)', // selectionBackground
        '#fff', // primaryButtonText
        '#454545', // secondaryButtonBackground
        '#fff', // secondaryButtonText
        '#242424', // editorBackground
        '#2d2d2d', // editorCodeBackground
        '#454545', // editorBorder
        '#fff', // editorPrimaryText
        '#6e6e6e' // editorSecondaryText
    );

    private lightColors: ThemeNeutralColors = new ThemeNeutralColors(
        '#fafafa', // background
        '#000', // primaryText
        '#888', // secondaryText
        '#ccc', // separator
        '#fff', // contextMenuBackground
        '#000', // contextMenuPrimaryText
        '#888', // contextMenuSecondaryText
        '#ccc', // contextMenuSeparator
        'rgba(0, 0, 0, 0.06)', // hoverBackground
        'rgba(0, 0, 0, 0.10)', // selectionBackground
        '#fff', // primaryButtonText
        '#fff', // secondaryButtonBackground
        '#666', // secondaryButtonText
        '#fafafa', // editorBackground
        '#eee', // editorCodeBackground
        '#ccc', // editorBorder
        '#000', // editorPrimaryText
        '#888' // editorSecondaryText
    );

    public createAllThemes(): Theme[] {
        const themes: Theme[] = [];
        themes.push(this.createKnowteTheme());
        themes.push(this.createLimerenceTheme());

        return themes;
    }

    private createKnowteTheme(): Theme {
        return new Theme('Knowte', this.creator, new ThemeCoreColors('#6260e3', '#429beb', '#4872e5'), this.darkColors, this.lightColors);
    }

    private createLimerenceTheme(): Theme {
        return new Theme(
            'Limerence',
            this.creator,
            new ThemeCoreColors('#fd297b', '#ff655b ', '#ff5864'),
            this.darkColors,
            this.lightColors
        );
    }
}
