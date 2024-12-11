const fs = require("fs");

const colors = {
    // black_0: "#242933",
    black_1: "#1E222A",
    black_2: "#191D24",

    blue0: "#5E81AC",
    blue1: "#81A1C1",
    blue2: "#88C0D0",

    white: {
        normal: "#BBC3D4",
    },

    gray_1: "#2E3440",
    gray_2: "#3B4252",
    gray_4: "#4C566A",

    red: {
        base: "#BF616A",
        bright: "#C5727A",
    },

    yellow: {
        base: '#EBCB8B',
        bright: '#EFD49F',
    },

    orange: {
        base: "#D08770",
        // bright: '#D79784',
        dim: '#CB775D',
    },

    green: {
        base: "#A3BE8C",
    },

    cyan: {
        base: "#8FBCBB",
    },

    magenta: {
        // base: '#B48EAD',
        bright: "#BE9DB8",
        // dim: '#A97EA1',
    },
}

const mapping = {
    fg: colors.white.normal,
    fg_2: colors.gray_4,
    bg: colors.black_1,
    bg_2: colors.black_2,
    bg_3: colors.black_2,
    selection_bg: colors.gray_2,
    selection_bg_2: colors.gray_1,
    selection_fg: "",
    change: {
        added: colors.green.base,
        modified: colors.yellow.base,
        deleted: colors.red.base,
    },
    shadow: colors.black_2,
    border: colors.black_2,
    transparent: "#00000000",
    link: {
        fg_active: colors.blue0
    },
    error_fg: colors.red.bright,
    warning: colors.yellow.bright,
}

const theme = {
    "name": "quosty-theme",
    "colors": {
        // side bar list/tree
        "list.activeSelectionBackground": mapping.selection_bg,
        "list.inactiveSelectionBackground": mapping.selection_bg_2,
        "list.hoverBackground": mapping.selection_bg_2,
        "foreground": mapping.fg,
        "descriptionForeground": mapping.fg,
        "editor.background": mapping.bg,
        "editor.selectionBackground": mapping.selection_bg,
        "editor.lineHighlightBorder": mapping.transparent,
        // highlight error in editor
        "editorError.foreground": mapping.error_fg,
        // link to declaration
        "editorLink.activeForeground": mapping.link.fg_active,
        // vertical lines showing add, modify, delete changes
        // located near line number
        "editorGutter.modifiedBackground": mapping.change.modified,
        "editorGutter.addedBackground": mapping.change.added,
        "editorGutter.deletedBackground": mapping.change.deleted,
        // border between 2 splits
        "editorGroup.border": mapping.border,
        "editorGroupHeader.tabsBackground": mapping.bg_3,
        "editorGroupHeader.tabsBorder": mapping.transparent,
        "tab.activeBackground": mapping.bg_2,
        "tab.inactiveBackground": mapping.bg_2,
        "tab.activeBorderTop": colors.orange.dim,
        "tab.activeBorder": mapping.transparent,
        "tab.activeForeground": mapping.fg,
        "tab.inactiveForeground": mapping.fg,
        "tab.hoverBackground": mapping.bg_2,
        "tab.border": mapping.bg,
        // git colors for file names, etc
        "gitDecoration.modifiedResourceForeground": mapping.change.modified,
        "gitDecoration.untrackedResourceForeground": mapping.change.added,
        "gitDecoration.deletedResourceForeground": mapping.change.deleted,
        "widget.border": mapping.transparent,
        "editorWidget.background": mapping.bg_3,
        "editorWidget.foreground": mapping.fg,
        "editorWidget.resizeBorder": mapping.transparent,
        "editorLineNumber.foreground": mapping.fg_2,
        "editorLineNumber.activeForeground": mapping.fg,
        "selection.background": mapping.selection_bg,
        "focusBorder": mapping.transparent,
        // file explorer, source control, etc
        "sideBar.background": mapping.bg,
        "sideBar.foreground": mapping.fg,
        "sideBar.border": mapping.bg_3,
        "sideBarTitle.foreground": mapping.fg,
        "sideBarSectionHeader.background": mapping.bg_3,
        "sideBarSectionHeader.foreground": mapping.fg,
        "sideBarSectionHeader.border": mapping.transparent,
        "statusBar.background": mapping.bg_3,
        "statusBarItem.remoteBackground": mapping.bg_3,
        "statusBarItem.remoteForeground": mapping.fg,
        "statusBar.foreground": mapping.fg,
        "activityBar.background": mapping.bg_3,
        "activityBar.foreground": mapping.fg,
        "activityBar.border": mapping.transparent,
        "activityBar.inactiveForeground": mapping.fg_2,
        "activityBar.activeBorder": mapping.transparent,
        "activityBarTop.background": mapping.bg_3,
        "activityBarTop.foreground": mapping.fg,
        "activityBarTop.border": mapping.transparent,
        "activityBarTop.inactiveForeground": mapping.fg_2,
        "activityBarTop.activeBorder": mapping.transparent,
        "scrollbar.shadow": mapping.shadow,
        "scrollbarSlider.background": mapping.selection_bg + "9F",
        "scrollbarSlider.hoverBackground": mapping.selection_bg + "9F",
        "menu.background": mapping.bg_2,
        "menu.foreground": mapping.fg,
        // Panels are shown below the editor area and contain views like Output and Integrated Terminal
        "panel.background": mapping.bg,
        "panel.border": mapping.border,
        "panelTitle.activeForeground": mapping.fg,
        "panelTitle.inactiveForeground": mapping.fg,
        "panelTitle.activeBorder": colors.orange.base,
        "panelInput.border": mapping.border,
        "titleBar.activeBackground": mapping.bg_3,
        "input.background": mapping.bg,
        "input.border": mapping.border,
        "input.foreground": mapping.fg,
        "input.placeholderForeground": colors.white.normal + "9F",
        "inputValidation.infoBackground": mapping.bg_3,
        "inputValidation.infoForeground": colors.blue2,
        "inputValidation.infoBorder": colors.blue2,
        "inputValidation.errorBackground": mapping.bg_3,
        "inputValidation.errorForeground": mapping.error_fg,
        "inputValidation.errorBorder": mapping.error_fg,
        "inputValidation.warningBackground": mapping.bg_3,
        "inputValidation.warningForeground": mapping.warning,
        "inputValidation.warningBorder": mapping.warning,
        // buttons like open repository when new window is created
        "button.background": mapping.bg_2,
        "button.foreground": mapping.fg,
        "button.hoverBackground": mapping.bg_3,
        // options like "Match case" and "Match whole word"
        "inputOption.activeBackground": mapping.selection_bg,
        "inputOption.activeBorder": mapping.transparent,
        // autocomplete widget, may be something else
        "editorSuggestWidget.selectedBackground": mapping.selection_bg,
        "editorSuggestWidget.highlightForeground": colors.blue2,
        "editorSuggestWidget.focusHighlightForeground": colors.blue2,
        // "inlineChat.background": "#ff0000",
        // editor window that shows references etc
        "peekView.border": mapping.transparent,
        "peekViewTitle.background": mapping.bg_2,
        "peekViewTitleDescription.foreground": "#81A1C1",
        "peekViewTitleLabel.foreground": mapping.fg,
        "peekViewEditor.background": mapping.bg_2,
        "peekViewEditor.matchHighlightBackground": mapping.selection_bg,
        "peekViewEditorGutter.background": mapping.bg_2,
        // mini tree on the right side
        "peekViewResult.selectionForeground": mapping.fg,
        "peekViewResult.background": mapping.bg_2,
        "peekViewResult.matchHighlightBackground": mapping.selection_bg,
        "peekViewResult.fileForeground": "#81A1C1",
        "peekViewResult.lineForeground": mapping.fg,
        // button in the middle top (yes its button)
        // CTRL-P triggers window from that button
        "commandCenter.background": mapping.bg_3,
        "commandCenter.foreground": mapping.transparent,
        "commandCenter.border": mapping.transparent,
        "commandCenter.activeBackground": mapping.bg_3,
        "commandCenter.activeForeground": mapping.transparent,
        "commandCenter.activeBorder": mapping.transparent,
        "commandCenter.debuggingBackground": mapping.transparent,
        // menu triggered my CTRL-P
        "pickerGroup.border": mapping.transparent,
        "pickerGroup.foreground": mapping.fg,
        "quickInput.background": mapping.bg_2,
        "quickInput.foreground": mapping.fg,
        "quickInputList.focusForeground": mapping.fg,
        "quickInputList.focusBackground": mapping.selection_bg,
        "quickInputList.focusIconForeground": mapping.fg,
        // https://code.visualstudio.com/api/references/theme-color#button-control
        "dropdown.background": mapping.bg_3,
        "dropdown.border": mapping.transparent,
        "dropdown.listBackground": mapping.bg_3,
        // https://code.visualstudio.com/api/references/theme-color#debug-colors
        "debugToolBar.background": mapping.bg,
        "debugToolBar.border": mapping.border,
    },
    "tokenColors": [
        {
            "scope": "comment",
            "settings": {
                "foreground": "#747c8b",
                "fontStyle": "italic"
            }
        },
        {
            "scope": [
                // type, struct, func
                "keyword",
                // type, interface, class, etc
                "storage.type",
                // public, private, readonly, async, etc
                "storage.modifier"
            ],
            "settings": {
                "foreground": colors.orange.base,
            }
        },
        {
            "scope": "string",
            "settings": {
                "foreground": colors.green.base
            }
        },
        {
            "scope": [
                // fields, params, variable names, etc
                "variable",
                // includes
                //  - entity.name.function.member
                "entity.name.function",
            ],
            "settings": {
                "foreground": colors.cyan.base,
            }
        },
        {
            // variables
            "scope": [
                "variable.other.readwrite",
                "variable.parameter",
                "support.variable",
                "keyword.operator"
            ],
            "settings": {
                "foreground": mapping.fg
            }
        },
        {
            "scope": [
                // const/readonly variables
                "variable.other.constant",
                // numeric literals
                "constant.numeric"
            ],
            "settings": {
                "foreground": colors.magenta.bright,
            }
        },
        {
            "scope": [
                // includes
                //  - entity.name.type.class
                //  - entity.name.type.interface
                //  - entity.name.type.enum
                "entity.name.type",
                // includes builtin classes like Promise
                "support.class",
                "support.type",
            ],
            "settings": {
                "foreground": colors.yellow.base,
            }
        }
    ]
}

fs.writeFileSync('themes/quosty-theme.json', JSON.stringify(theme, null, 2))

