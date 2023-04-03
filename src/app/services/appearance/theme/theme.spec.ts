// import { Theme } from './theme';
// import { ThemeCoreColors } from './theme-core-colors';
// import { ThemeCreator } from './theme-creator';
// import { ThemeNeutralColors } from './theme-neutral-colors';

// describe('Theme', () => {
//     function createNeutralColors(): ThemeNeutralColors {
//         return new ThemeNeutralColors(
//             'green', // hoveredItemBackground
//             'blue', // selectedItemBackground
//             'black', // tabText
//             'white', // selectedTabText
//             '#aaa', // mainBackground
//             '#ccc', // dragImageBackground
//             '#ddd', // dragImageBorder
//             '#eee', // primaryText
//             '#fff', // secondaryText
//             '#111', // sliderBackground
//             '#222', // sliderThumbBackground
//             '#333', // separators
//             '#777', // contextMenuBackground
//             '#555', // contextMenuSeparators
//             '#555', // contextMenuSecondaryText
//             '#666', // scrollBars
//             '#888', // commandIcon
//             'orange', // primaryButtonText
//             'grey', // secondaryButtonBackground
//             'magenta', // secondaryButtonText
//             'brown' // editorBackground
//         );
//     }

//     beforeEach(() => {});

//     describe('constructor', () => {
//         it('should create', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme).toBeDefined();
//         });

//         it('should set name', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme.name).toEqual('My name');
//         });

//         it('should set creator', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme.creator).toBe(creator);
//         });

//         it('should set coreColors', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme.coreColors).toBe(coreColors);
//         });

//         it('should set darkColors', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme.darkColors).toBe(darkColors);
//         });

//         it('should set lightColors', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme.lightColors).toBe(lightColors);
//         });

//         it('should set isBroken to false', () => {
//             // Arrange
//             const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
//             const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');
//             const darkColors: ThemeNeutralColors = createNeutralColors();
//             const lightColors: ThemeNeutralColors = createNeutralColors();

//             // Act
//             const theme: Theme = new Theme('My name', creator, coreColors, darkColors, lightColors);

//             // Assert
//             expect(theme.isBroken).toEqual(false);
//         });
//     });
// });
