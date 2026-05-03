const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const checkOnly = process.argv.includes("--check");

const palettes = [
  {
    file: "themes/encom-tron-legacy-color-theme.json",
    name: "Encom Tron Legacy",
    uiLabel: "Tron Legacy - Encom",
    noBold: true,
    bg: "#061016",
    bgDeep: "#02090D",
    bgSoft: "#0A1B24",
    panel: "#07151C",
    panelAlt: "#0D2330",
    border: "#1D5364",
    fg: "#D8FBFF",
    fgSoft: "#A9E6F0",
    muted: "#6DA9B8",
    mutedDeep: "#3E7482",
    accent: "#6FC3DF",
    accentBright: "#00F5FF",
    accentAlt: "#2D7DFF",
    keyword: "#B892FF",
    property: "#FFD08A",
    propertyReadonly: "#9BE8FF",
    secondary: "#9BE8FF",
    tertiary: "#8DFFB3",
    success: "#8DFFB3",
    warm: "#FFC777",
    danger: "#FF6E7A",
    dangerDeep: "#E04005",
    badgeFg: "#001014",
    ansi: {
      black: "#061016",
      red: "#FF6E7A",
      green: "#8DFFB3",
      yellow: "#FFC777",
      blue: "#2D7DFF",
      magenta: "#FF9F7A",
      cyan: "#00F5FF",
      white: "#D8FBFF",
      brightBlack: "#3E7482",
      brightRed: "#FF8B94",
      brightGreen: "#B8FFD0",
      brightYellow: "#FFE2A6",
      brightBlue: "#75A7FF",
      brightMagenta: "#FFC3A8",
      brightCyan: "#9BFBFF",
      brightWhite: "#FFFFFF"
    }
  },
  {
    file: "themes/encom-tron-clean-color-theme.json",
    name: "Encom Tron Clean",
    uiLabel: "Tron Legacy - Encom Clean",
    noItalics: true,
    bg: "#061016",
    bgDeep: "#02090D",
    bgSoft: "#0A1B24",
    panel: "#07151C",
    panelAlt: "#0D2330",
    border: "#1D5364",
    fg: "#D8FBFF",
    fgSoft: "#A9E6F0",
    muted: "#6DA9B8",
    mutedDeep: "#3E7482",
    accent: "#6FC3DF",
    accentBright: "#00F5FF",
    accentAlt: "#2D7DFF",
    keyword: "#B892FF",
    property: "#7AD9E8",
    propertyReadonly: "#9BE8FF",
    secondary: "#9BE8FF",
    tertiary: "#8DFFB3",
    success: "#8DFFB3",
    warm: "#FFC777",
    danger: "#FF6E7A",
    dangerDeep: "#E04005",
    badgeFg: "#001014",
    ansi: {
      black: "#061016",
      red: "#FF6E7A",
      green: "#8DFFB3",
      yellow: "#FFC777",
      blue: "#2D7DFF",
      magenta: "#FF9F7A",
      cyan: "#00F5FF",
      white: "#D8FBFF",
      brightBlack: "#3E7482",
      brightRed: "#FF8B94",
      brightGreen: "#B8FFD0",
      brightYellow: "#FFE2A6",
      brightBlue: "#75A7FF",
      brightMagenta: "#FFC3A8",
      brightCyan: "#9BFBFF",
      brightWhite: "#FFFFFF"
    }
  },
  {
    file: "themes/ares-tron-legacy-theme.json",
    name: "Ares Tron Legacy",
    uiLabel: "Tron - Ares",
    bg: "#140507",
    bgDeep: "#080102",
    bgSoft: "#23090D",
    panel: "#1A070A",
    panelAlt: "#2C0C12",
    border: "#6C1D2A",
    fg: "#FFE4E6",
    fgSoft: "#FFC8CD",
    muted: "#D08B92",
    mutedDeep: "#8E3D48",
    accent: "#FF2D45",
    accentBright: "#FF4D6D",
    accentAlt: "#FF6A3D",
    keyword: "#FF6A3D",
    property: "#FFB0A1",
    propertyReadonly: "#FF9A62",
    secondary: "#FF9A62",
    tertiary: "#FFD166",
    success: "#FF8F70",
    warm: "#FFE066",
    danger: "#FF2D45",
    dangerDeep: "#B90E23",
    badgeFg: "#180205",
    ansi: {
      black: "#140507",
      red: "#FF2D45",
      green: "#FF8F70",
      yellow: "#FFD166",
      blue: "#FF6A3D",
      magenta: "#D83A5A",
      cyan: "#FFB0A1",
      white: "#FFE4E6",
      brightBlack: "#8E3D48",
      brightRed: "#FF6D7D",
      brightGreen: "#FFC0AE",
      brightYellow: "#FFE8A3",
      brightBlue: "#FF9A62",
      brightMagenta: "#FF8FA4",
      brightCyan: "#FFD0C8",
      brightWhite: "#FFFFFF"
    }
  },
  {
    file: "themes/clu-tron-legacy-theme.json",
    name: "CLU Tron Legacy",
    uiLabel: "Tron Legacy - CLU",
    bg: "#120B05",
    bgDeep: "#080401",
    bgSoft: "#231407",
    panel: "#1A0E05",
    panelAlt: "#2C1908",
    border: "#7A4A0D",
    fg: "#FFE8C1",
    fgSoft: "#FFD99C",
    muted: "#C59055",
    mutedDeep: "#80623B",
    accent: "#FE9C00",
    accentBright: "#FFB020",
    accentAlt: "#FF6A00",
    keyword: "#FF6A00",
    property: "#FFC65A",
    propertyReadonly: "#FFCB6B",
    secondary: "#FFCB6B",
    tertiary: "#FFFFFF",
    success: "#FFB020",
    warm: "#FFE08A",
    danger: "#FF5A1F",
    dangerDeep: "#C93B00",
    badgeFg: "#160900",
    ansi: {
      black: "#120B05",
      red: "#FF5A1F",
      green: "#FFB020",
      yellow: "#FFCB6B",
      blue: "#FE9C00",
      magenta: "#CC6A00",
      cyan: "#D98200",
      white: "#FFE8C1",
      brightBlack: "#80623B",
      brightRed: "#FF7A3D",
      brightGreen: "#FFC65A",
      brightYellow: "#FFE08A",
      brightBlue: "#FFB020",
      brightMagenta: "#FF9F45",
      brightCyan: "#FFCD8A",
      brightWhite: "#FFFFFF"
    }
  },
  {
    file: "themes/retro-tron-color-theme.json",
    name: "Retro Tron",
    uiLabel: "Tron - Retro Grid",
    bg: "#030712",
    bgDeep: "#01030A",
    bgSoft: "#07142A",
    panel: "#050D1C",
    panelAlt: "#0A1E3D",
    border: "#124C86",
    fg: "#DDF7FF",
    fgSoft: "#A9E9FF",
    muted: "#6AA7C8",
    mutedDeep: "#3C6D88",
    accent: "#00A3FF",
    accentBright: "#00F0FF",
    accentAlt: "#FFB000",
    keyword: "#FFB000",
    property: "#62C9FF",
    propertyReadonly: "#39FF14",
    secondary: "#39FF14",
    tertiary: "#FFE066",
    success: "#39FF14",
    warm: "#FFB000",
    danger: "#FF3B6B",
    dangerDeep: "#B70F3A",
    badgeFg: "#01030A",
    ansi: {
      black: "#030712",
      red: "#FF3B6B",
      green: "#39FF14",
      yellow: "#FFE066",
      blue: "#00A3FF",
      magenta: "#FFB000",
      cyan: "#00F0FF",
      white: "#DDF7FF",
      brightBlack: "#3C6D88",
      brightRed: "#FF76A0",
      brightGreen: "#8DFF78",
      brightYellow: "#FFF0A6",
      brightBlue: "#62C9FF",
      brightMagenta: "#FFD65A",
      brightCyan: "#8BFAFF",
      brightWhite: "#FFFFFF"
    }
  }
];

function alpha(hex, amount) {
  const value = Math.round(amount * 255).toString(16).padStart(2, "0").toUpperCase();
  return `${hex}${value}`;
}

function makeWorkbench(p) {
  return {
    "focusBorder": alpha(p.accentBright, 0.82),
    "foreground": p.fg,
    "disabledForeground": alpha(p.muted, 0.65),
    "widget.border": alpha(p.accent, 0.32),
    "widget.shadow": "#00000088",
    "selection.background": alpha(p.accent, 0.28),
    "descriptionForeground": p.muted,
    "errorForeground": p.danger,
    "icon.foreground": p.accent,
    "sash.hoverBorder": p.accentBright,
    "textBlockQuote.background": alpha(p.panelAlt, 0.4),
    "textBlockQuote.border": p.accent,
    "textCodeBlock.background": alpha(p.panelAlt, 0.6),
    "textLink.foreground": p.accentBright,
    "textLink.activeForeground": p.accentAlt,
    "textPreformat.foreground": p.tertiary,
    "textPreformat.background": alpha(p.panelAlt, 0.5),
    "textPreformat.border": alpha(p.accent, 0.28),
    "textSeparator.foreground": p.mutedDeep,

    "editor.background": p.bg,
    "editor.foreground": p.fg,
    "editorLineNumber.foreground": p.mutedDeep,
    "editorLineNumber.activeForeground": p.accentBright,
    "editorCursor.foreground": p.accentBright,
    "editor.findMatchBackground": alpha(p.warm, 0.42),
    "editor.findMatchBorder": p.warm,
    "editor.findMatchHighlightBackground": alpha(p.warm, 0.18),
    "editor.lineHighlightBackground": alpha(p.accent, 0.08),
    "editor.lineHighlightBorder": alpha(p.accentBright, 0.18),
    "editor.selectionBackground": alpha(p.accent, 0.28),
    "editor.selectionHighlightBackground": alpha(p.accent, 0.14),
    "editor.wordHighlightBackground": alpha(p.secondary, 0.14),
    "editor.wordHighlightStrongBackground": alpha(p.secondary, 0.24),
    "editorBracketMatch.background": alpha(p.accentBright, 0.16),
    "editorBracketMatch.border": p.accentBright,
    "editorIndentGuide.background1": alpha(p.accent, 0.12),
    "editorIndentGuide.activeBackground1": alpha(p.accentBright, 0.42),
    "editorInlayHint.background": alpha(p.panelAlt, 0.72),
    "editorInlayHint.foreground": p.muted,
    "editorRuler.foreground": alpha(p.accent, 0.16),
    "editorStickyScroll.background": p.bg,
    "editorStickyScrollHover.background": p.bgSoft,
    "editorWhitespace.foreground": alpha(p.accent, 0.18),
    "editorCodeLens.foreground": p.mutedDeep,
    "editorError.foreground": p.danger,
    "editorError.border": alpha(p.danger, 0.3),
    "editorError.background": alpha(p.danger, 0.08),
    "editorWarning.foreground": p.warm,
    "editorWarning.border": alpha(p.warm, 0.3),
    "editorWarning.background": alpha(p.warm, 0.08),
    "editorInfo.foreground": p.accent,
    "editorInfo.border": alpha(p.accent, 0.3),
    "editorInfo.background": alpha(p.accent, 0.08),
    "editorHint.foreground": p.success,
    "editorHint.border": alpha(p.success, 0.3),
    "editorGutter.addedBackground": p.success,
    "editorGutter.modifiedBackground": p.accent,
    "editorGutter.deletedBackground": p.danger,
    "editorOverviewRuler.addedForeground": alpha(p.success, 0.75),
    "editorOverviewRuler.modifiedForeground": alpha(p.accentBright, 0.75),
    "editorOverviewRuler.deletedForeground": alpha(p.danger, 0.75),
    "editorOverviewRuler.errorForeground": p.danger,
    "editorOverviewRuler.warningForeground": p.warm,
    "editorOverviewRuler.infoForeground": p.accent,
    "editorMarkerNavigation.background": p.panel,
    "editorMarkerNavigationError.background": p.danger,
    "editorMarkerNavigationWarning.background": p.warm,
    "editorMarkerNavigationInfo.background": p.accent,

    "activityBar.background": p.bgDeep,
    "activityBar.foreground": p.fg,
    "activityBar.inactiveForeground": alpha(p.muted, 0.72),
    "activityBar.activeBorder": p.accentBright,
    "activityBarBadge.background": p.accentBright,
    "activityBarBadge.foreground": p.badgeFg,

    "sideBar.background": p.bgDeep,
    "sideBar.foreground": p.fgSoft,
    "sideBar.border": alpha(p.accent, 0.24),
    "sideBarSectionHeader.background": p.panel,
    "sideBarSectionHeader.foreground": p.fg,
    "sideBarTitle.foreground": p.accentBright,

    "list.activeSelectionBackground": alpha(p.accent, 0.26),
    "list.activeSelectionForeground": p.fg,
    "list.activeSelectionIconForeground": p.accentBright,
    "list.focusBackground": p.bgSoft,
    "list.focusForeground": p.fg,
    "list.focusAndSelectionOutline": alpha(p.accentBright, 0.46),
    "list.hoverBackground": alpha(p.accent, 0.12),
    "list.inactiveSelectionBackground": alpha(p.accent, 0.16),
    "list.inactiveSelectionForeground": p.fgSoft,
    "list.inactiveSelectionIconForeground": p.accent,
    "list.highlightForeground": p.accentBright,
    "list.errorForeground": p.danger,
    "list.warningForeground": p.warm,
    "tree.indentGuidesStroke": alpha(p.accent, 0.28),

    "tab.activeBackground": p.bg,
    "tab.activeForeground": p.fg,
    "tab.activeBorderTop": p.accentBright,
    "tab.activeBorder": p.accent,
    "tab.inactiveBackground": p.bgDeep,
    "tab.inactiveForeground": p.muted,
    "tab.hoverBackground": p.bgSoft,
    "tab.border": p.bgDeep,
    "editorGroupHeader.tabsBackground": p.bgDeep,
    "editorGroup.border": alpha(p.accent, 0.2),

    "statusBar.background": p.panel,
    "statusBar.foreground": p.fg,
    "statusBar.border": alpha(p.accent, 0.22),
    "statusBar.debuggingBackground": p.dangerDeep,
    "statusBar.debuggingForeground": "#FFFFFF",
    "statusBar.noFolderBackground": p.bgSoft,
    "statusBarItem.hoverBackground": alpha(p.accent, 0.18),
    "statusBarItem.remoteBackground": p.accentBright,
    "statusBarItem.remoteForeground": p.badgeFg,

    "titleBar.activeBackground": p.bgDeep,
    "titleBar.activeForeground": p.fg,
    "titleBar.inactiveBackground": p.bgDeep,
    "titleBar.inactiveForeground": alpha(p.muted, 0.8),

    "panel.background": p.bgDeep,
    "panel.border": alpha(p.accent, 0.28),
    "panelTitle.activeBorder": p.accentBright,
    "panelTitle.activeForeground": p.fg,
    "panelTitle.inactiveForeground": p.muted,
    "problemsErrorIcon.foreground": p.danger,
    "problemsWarningIcon.foreground": p.warm,
    "problemsInfoIcon.foreground": p.accent,

    "terminal.background": p.bg,
    "terminal.foreground": p.fg,
    "terminalCursor.foreground": p.accentBright,
    "terminal.selectionBackground": alpha(p.accent, 0.28),
    "terminal.ansiBlack": p.ansi.black,
    "terminal.ansiRed": p.ansi.red,
    "terminal.ansiGreen": p.ansi.green,
    "terminal.ansiYellow": p.ansi.yellow,
    "terminal.ansiBlue": p.ansi.blue,
    "terminal.ansiMagenta": p.ansi.magenta,
    "terminal.ansiCyan": p.ansi.cyan,
    "terminal.ansiWhite": p.ansi.white,
    "terminal.ansiBrightBlack": p.ansi.brightBlack,
    "terminal.ansiBrightRed": p.ansi.brightRed,
    "terminal.ansiBrightGreen": p.ansi.brightGreen,
    "terminal.ansiBrightYellow": p.ansi.brightYellow,
    "terminal.ansiBrightBlue": p.ansi.brightBlue,
    "terminal.ansiBrightMagenta": p.ansi.brightMagenta,
    "terminal.ansiBrightCyan": p.ansi.brightCyan,
    "terminal.ansiBrightWhite": p.ansi.brightWhite,

    "input.background": p.panel,
    "input.foreground": p.fg,
    "input.border": alpha(p.accent, 0.34),
    "input.placeholderForeground": p.muted,
    "inputOption.activeBackground": alpha(p.accent, 0.2),
    "inputOption.activeBorder": p.accentBright,
    "dropdown.background": p.panel,
    "dropdown.foreground": p.fg,
    "dropdown.border": alpha(p.accent, 0.34),
    "button.background": p.accent,
    "button.foreground": p.badgeFg,
    "button.hoverBackground": p.accentBright,
    "button.secondaryBackground": p.bgSoft,
    "button.secondaryForeground": p.fg,
    "button.secondaryHoverBackground": p.panelAlt,

    "badge.background": p.accent,
    "badge.foreground": p.badgeFg,
    "progressBar.background": p.accentBright,
    "scrollbarSlider.background": alpha(p.accent, 0.22),
    "scrollbarSlider.hoverBackground": alpha(p.accent, 0.34),
    "scrollbarSlider.activeBackground": alpha(p.accentBright, 0.46),

    "breadcrumb.background": p.bg,
    "breadcrumb.foreground": p.muted,
    "breadcrumb.focusForeground": p.fg,
    "breadcrumb.activeSelectionForeground": p.accentBright,
    "breadcrumbPicker.background": p.panel,

    "peekView.border": p.accent,
    "peekViewEditor.background": p.bg,
    "peekViewResult.background": p.bgDeep,
    "peekViewResult.selectionBackground": alpha(p.accent, 0.22),
    "peekViewTitle.background": p.panel,
    "peekViewTitleLabel.foreground": p.fg,
    "peekViewTitleDescription.foreground": p.muted,

    "diffEditor.insertedTextBackground": alpha(p.tertiary, 0.16),
    "diffEditor.removedTextBackground": alpha(p.danger, 0.18),
    "diffEditor.insertedLineBackground": alpha(p.success, 0.09),
    "diffEditor.removedLineBackground": alpha(p.danger, 0.1),
    "diffEditor.diagonalFill": alpha(p.accent, 0.24),
    "merge.currentHeaderBackground": alpha(p.accent, 0.24),
    "merge.currentContentBackground": alpha(p.accent, 0.12),
    "merge.incomingHeaderBackground": alpha(p.success, 0.24),
    "merge.incomingContentBackground": alpha(p.success, 0.12),
    "merge.border": alpha(p.accentBright, 0.36),
    "merge.commonContentBackground": alpha(p.panelAlt, 0.4),
    "merge.commonHeaderBackground": alpha(p.panelAlt, 0.7),
    "gitDecoration.addedResourceForeground": p.success,
    "gitDecoration.modifiedResourceForeground": p.accentBright,
    "gitDecoration.deletedResourceForeground": p.danger,
    "gitDecoration.untrackedResourceForeground": p.secondary,
    "gitDecoration.ignoredResourceForeground": p.mutedDeep,
    "gitDecoration.conflictingResourceForeground": p.warm,

    "minimap.findMatchHighlight": p.warm,
    "minimap.selectionHighlight": p.accent,
    "minimap.errorHighlight": p.danger,
    "minimap.warningHighlight": p.warm,

    "notifications.background": p.panel,
    "notifications.foreground": p.fg,
    "notifications.border": alpha(p.accent, 0.28),
    "notificationLink.foreground": p.accentBright,
    "settings.headerForeground": p.accentBright,
    "settings.modifiedItemIndicator": p.warm,
    "settings.dropdownBackground": p.panel,
    "settings.dropdownForeground": p.fg,
    "settings.textInputBackground": p.panel,
    "settings.textInputForeground": p.fg,
    "settings.checkboxBackground": p.panel,
    "settings.checkboxForeground": p.fg,
    "settings.rowHoverBackground": alpha(p.accent, 0.1),
    "settings.focusedRowBackground": alpha(p.accent, 0.13),
    "settings.focusedRowBorder": alpha(p.accentBright, 0.34),

    "debugToolBar.background": p.panel,
    "debugToolBar.border": alpha(p.accent, 0.24),
    "debugIcon.startForeground": p.success,
    "debugIcon.pauseForeground": p.warm,
    "debugIcon.stopForeground": p.danger,
    "debugIcon.restartForeground": p.accentBright,
    "debugIcon.stepOverForeground": p.accent,
    "debugIcon.stepIntoForeground": p.accent,
    "debugIcon.stepOutForeground": p.accent,
    "debugIcon.continueForeground": p.success,

    "testing.iconErrored": p.danger,
    "testing.iconFailed": p.danger,
    "testing.iconPassed": p.success,
    "testing.iconQueued": p.muted,
    "testing.iconSkipped": p.mutedDeep,
    "testing.iconUnset": p.muted,
    "testing.iconRunning": p.accentBright,
    "testing.peekBorder": p.accent,
    "testing.peekHeaderBackground": p.panel,
    "testing.message.error.decorationForeground": p.danger,
    "testing.message.error.lineBackground": alpha(p.danger, 0.08),
    "testing.message.info.decorationForeground": p.accent,
    "testing.message.info.lineBackground": alpha(p.accent, 0.08),

    "notebook.editorBackground": p.bg,
    "notebook.cellBorderColor": alpha(p.accent, 0.18),
    "notebook.cellHoverBackground": alpha(p.accent, 0.08),
    "notebook.focusedCellBorder": p.accentBright,
    "notebook.focusedEditorBorder": p.accentBright,
    "notebook.inactiveFocusedCellBorder": alpha(p.accent, 0.45),
    "notebook.cellInsertionIndicator": p.accentBright,
    "notebookScrollbarSlider.background": alpha(p.accent, 0.22),
    "notebookScrollbarSlider.hoverBackground": alpha(p.accent, 0.34),
    "notebookScrollbarSlider.activeBackground": alpha(p.accentBright, 0.46),

    "symbolIcon.arrayForeground": p.tertiary,
    "symbolIcon.booleanForeground": p.secondary,
    "symbolIcon.classForeground": p.warm,
    "symbolIcon.colorForeground": p.accentBright,
    "symbolIcon.constantForeground": p.secondary,
    "symbolIcon.constructorForeground": p.warm,
    "symbolIcon.enumeratorForeground": p.warm,
    "symbolIcon.enumeratorMemberForeground": p.secondary,
    "symbolIcon.eventForeground": p.danger,
    "symbolIcon.fieldForeground": p.property || p.fgSoft,
    "symbolIcon.fileForeground": p.fg,
    "symbolIcon.folderForeground": p.accent,
    "symbolIcon.functionForeground": p.accentBright,
    "symbolIcon.interfaceForeground": p.warm,
    "symbolIcon.keyForeground": p.property || p.fgSoft,
    "symbolIcon.keywordForeground": p.keyword || p.accentAlt,
    "symbolIcon.methodForeground": p.accentBright,
    "symbolIcon.moduleForeground": p.accent,
    "symbolIcon.namespaceForeground": p.accent,
    "symbolIcon.nullForeground": p.secondary,
    "symbolIcon.numberForeground": p.warm,
    "symbolIcon.objectForeground": p.property || p.fgSoft,
    "symbolIcon.operatorForeground": p.fgSoft,
    "symbolIcon.packageForeground": p.accent,
    "symbolIcon.propertyForeground": p.property || p.fgSoft,
    "symbolIcon.referenceForeground": p.accentAlt,
    "symbolIcon.snippetForeground": p.tertiary,
    "symbolIcon.stringForeground": p.tertiary,
    "symbolIcon.structForeground": p.warm,
    "symbolIcon.textForeground": p.fg,
    "symbolIcon.typeParameterForeground": p.secondary,
    "symbolIcon.unitForeground": p.warm,
    "symbolIcon.variableForeground": p.fg,

    "charts.foreground": p.fg,
    "charts.lines": p.mutedDeep,
    "charts.red": p.danger,
    "charts.blue": p.accentAlt,
    "charts.yellow": p.warm,
    "charts.orange": p.accent,
    "charts.green": p.success
  };
}

function rule(name, scope, foreground, fontStyle = "") {
  const settings = { foreground };
  if (fontStyle) settings.fontStyle = fontStyle;
  return { name, scope, settings };
}

function makeTokenColors(p) {
  const keyword = p.keyword || p.accentAlt;
  const property = p.property || p.fgSoft;
  return [
    rule("Comments - subdued program notes", ["comment", "punctuation.definition.comment"], p.muted, "italic"),
    rule("Documentation comments", [
      "comment.block.documentation",
      "comment.block.documentation punctuation.definition.comment"
    ], p.fgSoft, "italic"),
    rule("Keywords and control flow", [
      "keyword",
      "keyword.control",
      "keyword.operator.expression",
      "storage.modifier",
      "storage.type"
    ], keyword),
    rule("Module boundaries", [
      "keyword.control.import",
      "keyword.control.export",
      "keyword.control.from",
      "keyword.control.as",
      "keyword.other.important"
    ], p.warm),
    rule("Operators and punctuation", [
      "keyword.operator",
      "punctuation",
      "punctuation.separator",
      "punctuation.terminator",
      "meta.brace",
      "meta.delimiter"
    ], p.fgSoft),
    rule("Functions and calls", [
      "entity.name.function",
      "support.function",
      "support.function.builtin",
      "meta.function-call",
      "variable.function",
      "meta.method-call",
      "entity.name.function.member",
      "support.function.console",
      "support.function.dom",
      "support.function.node"
    ], p.accentBright),
    rule("React and framework hooks", [
      "support.function.react",
      "support.function.hook",
      "entity.name.function.react",
      "variable.other.readwrite.alias.js",
      "variable.other.readwrite.alias.ts",
      "meta.import variable.other.readwrite"
    ], p.secondary),
    rule("Next.js, React Server Components, and directives", [
      "string.quoted.single.js meta.directive",
      "string.quoted.double.js meta.directive",
      "string.quoted.single.ts meta.directive",
      "string.quoted.double.ts meta.directive",
      "meta.directive",
      "keyword.other.directive",
      "support.constant.nextjs",
      "support.constant.astro"
    ], p.warm),
    rule("React components and constructors", [
      "support.class.component",
      "entity.name.type.class.jsx",
      "entity.name.tag support.class.component",
      "variable.other.object.js",
      "variable.other.object.ts",
      "entity.name.function.constructor",
      "entity.name.tag.jsx support.class.component",
      "entity.name.tag.tsx support.class.component"
    ], p.secondary),
    rule("Variables and parameters", [
      "variable",
      "variable.other",
      "variable.parameter",
      "support.variable",
      "meta.definition.variable"
    ], p.fg),
    rule("Language constants", [
      "constant.language",
      "constant.character",
      "constant.other",
      "variable.language",
      "support.constant"
    ], p.secondary),
    rule("Numbers and units", [
      "constant.numeric",
      "constant.numeric.css",
      "keyword.other.unit",
      "support.constant.property-value.css"
    ], p.warm),
    rule("Strings", [
      "string",
      "punctuation.definition.string",
      "string.quoted",
      "string.template"
    ], p.tertiary),
    rule("String escapes and interpolation", [
      "constant.character.escape",
      "punctuation.definition.template-expression",
      "punctuation.section.embedded",
      "source.js.embedded.expression",
      "source.ts.embedded.expression"
    ], p.warm),
    rule("Regular expressions", [
      "string.regexp",
      "constant.other.character-class.regexp",
      "keyword.operator.quantifier.regexp"
    ], p.danger),
    rule("Types, classes, and interfaces", [
      "entity.name.type",
      "entity.name.class",
      "entity.name.struct",
      "entity.name.enum",
      "entity.name.type.alias",
      "entity.name.type.module",
      "support.class",
      "support.type",
      "support.type.primitive",
      "storage.type.interface",
      "entity.name.type.interface",
      "entity.name.type.ts",
      "entity.name.type.tsx",
      "support.type.builtin.ts",
      "support.type.builtin.tsx"
    ], p.warm),
    rule("TypeScript generics and constraints", [
      "entity.name.type.parameter",
      "meta.type.parameters",
      "meta.type.parameters.ts",
      "meta.type.parameters.tsx",
      "punctuation.definition.typeparameters",
      "keyword.operator.type.annotation",
      "keyword.operator.expression.keyof",
      "keyword.operator.expression.infer",
      "keyword.operator.expression.is"
    ], p.secondary),
    rule("Object properties and JSON keys", [
      "variable.object.property",
      "variable.other.property",
      "support.type.property-name",
      "support.type.property-name.json",
      "meta.object-literal.key",
      "meta.property.object",
      "entity.name.tag.yaml",
      "entity.name.section"
    ], property),
    rule("Decorators and annotations", [
      "meta.decorator",
      "punctuation.decorator",
      "storage.type.annotation",
      "entity.name.function.decorator",
      "meta.function.decorator"
    ], p.danger, "italic"),
    rule("JSX, Astro, HTML, and XML tags", [
      "entity.name.tag",
      "entity.name.tag.html",
      "entity.name.tag.jsx",
      "entity.name.tag.tsx",
      "entity.name.tag.astro",
      "punctuation.definition.tag"
    ], p.accentBright),
    rule("JSX text and embedded expressions", [
      "meta.jsx.children",
      "meta.jsx.children.js",
      "meta.jsx.children.tsx",
      "meta.embedded.expression",
      "punctuation.section.embedded.begin.jsx",
      "punctuation.section.embedded.end.jsx",
      "punctuation.section.embedded.begin.tsx",
      "punctuation.section.embedded.end.tsx"
    ], p.fgSoft),
    rule("JSX, Astro, HTML, and Tailwind attributes", [
      "entity.other.attribute-name",
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.html",
      "entity.other.attribute-name.jsx",
      "entity.other.attribute-name.tsx",
      "entity.other.attribute-name.astro",
      "support.type.property-name.css"
    ], p.warm, "italic"),
    rule("Tailwind utility class strings", [
      "meta.attribute.class.html string",
      "meta.attribute.class.jsx string",
      "meta.attribute.class.tsx string",
      "meta.attribute.class.astro string",
      "string.quoted.double.html meta.class",
      "string.quoted.single.html meta.class",
      "support.constant.tailwind"
    ], p.tertiary),
    rule("CSS selectors", [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.id.css",
      "entity.name.tag.css",
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.attribute-name.pseudo-element.css"
    ], p.accentBright),
    rule("CSS properties", [
      "support.type.property-name.css",
      "meta.property-name.css",
      "support.type.vendored.property-name.css"
    ], p.fgSoft),
    rule("CSS values and Tailwind-like literals", [
      "support.constant.property-value.css",
      "meta.property-value.css",
      "string.quoted.double.html",
      "string.quoted.single.html"
    ], p.tertiary),
    rule("MDX imports and JSX islands", [
      "source.mdx meta.import",
      "source.mdx entity.name.tag",
      "source.mdx entity.other.attribute-name",
      "source.mdx meta.jsx.children",
      "source.mdx markup.inline.raw"
    ], p.accentBright),
    rule("SQL keywords and clauses", [
      "keyword.other.DML.sql",
      "keyword.other.ddl.sql",
      "keyword.other.sql",
      "storage.type.sql",
      "support.function.aggregate.sql"
    ], keyword, "bold"),
    rule("SQL tables, columns, and symbols", [
      "entity.name.function.sql",
      "entity.name.type.sql",
      "support.type.sql",
      "meta.table.sql",
      "meta.column.sql"
    ], p.accentBright),
    rule("Python self, magic, and builtins", [
      "variable.language.special.self.python",
      "support.function.builtin.python",
      "support.type.python",
      "variable.parameter.function.language.special.self.python",
      "support.variable.magic.python",
      "support.function.magic.python",
      "entity.name.function.magic.python"
    ], p.secondary),
    rule("Python decorators, type hints, and f-strings", [
      "meta.function.decorator.python",
      "entity.name.function.decorator.python",
      "storage.type.function.python",
      "support.type.python",
      "meta.function.parameters.python",
      "constant.character.format.placeholder.other.python",
      "punctuation.definition.interpolation.begin.python",
      "punctuation.definition.interpolation.end.python"
    ], p.warm),
    rule("Shell, Dockerfile, and CI directives", [
      "support.function.builtin.shell",
      "support.function.builtin.zsh",
      "support.function.builtin.bash",
      "keyword.other.special-method.shell",
      "entity.name.function.shell",
      "keyword.other.Dockerfile",
      "keyword.other.special-method.dockerfile",
      "support.function.git-rebase"
    ], p.accentBright),
    rule("YAML, GitLab CI, Kubernetes, and Docker keys", [
      "entity.name.tag.yaml",
      "support.type.property-name.yaml",
      "punctuation.separator.key-value.yaml",
      "constant.other.alias.yaml",
      "variable.other.alias.yaml"
    ], p.fgSoft),
    rule("Markdown headings", [
      "markup.heading",
      "markup.heading punctuation.definition.heading",
      "markup.heading.markdown",
      "markup.heading.setext.1.markdown",
      "markup.heading.setext.2.markdown"
    ], p.accentBright, "bold"),
    rule("Markdown heading markers and separators", [
      "punctuation.definition.heading.markdown",
      "meta.separator.markdown",
      "markup.heading.setext punctuation.definition.heading.markdown"
    ], p.warm),
    rule("Markdown links and references", [
      "markup.underline.link",
      "string.other.link",
      "constant.other.reference.link",
      "meta.link.inline",
      "markup.underline.link.markdown",
      "meta.image.inline.markdown",
      "meta.link.reference.def.markdown",
      "constant.other.reference.link.markdown"
    ], p.accentAlt),
    rule("Markdown link text and titles", [
      "string.other.link.title.markdown",
      "string.other.link.description.markdown",
      "markup.link"
    ], p.fgSoft),
    rule("Markdown emphasis", ["markup.italic"], p.fgSoft, "italic"),
    rule("Markdown strong", ["markup.bold"], p.warm, "bold"),
    rule("Markdown strikethrough", ["markup.strikethrough"], p.danger),
    rule("Markdown code and fences", [
      "markup.inline.raw",
      "markup.fenced_code.block",
      "markup.raw.block",
      "punctuation.definition.raw.markdown",
      "markup.raw.inline.markdown",
      "markup.raw.block.markdown",
      "fenced_code.block.language",
      "variable.language.fenced.markdown"
    ], p.tertiary),
    rule("Markdown quotes and lists", [
      "markup.quote",
      "punctuation.definition.quote",
      "beginning.punctuation.definition.list.markdown",
      "markup.list",
      "punctuation.definition.list.begin.markdown"
    ], p.muted),
    rule("Markdown tables", [
      "markup.table",
      "punctuation.definition.table.markdown",
      "meta.table.markdown"
    ], p.fgSoft),
    rule("Markdown task list markers", [
      "markup.list.checked",
      "markup.list.unnumbered",
      "keyword.other.task",
      "meta.task-list-item.markdown"
    ], p.accent),
    rule("Markdown frontmatter", [
      "meta.frontmatter.markdown",
      "meta.frontmatter.mdx",
      "punctuation.definition.metadata.markdown",
      "punctuation.section.frontmatter.begin",
      "punctuation.section.frontmatter.end"
    ], p.warm),
    rule("Diff inserted", ["markup.inserted"], p.tertiary),
    rule("Diff deleted", ["markup.deleted"], p.danger),
    rule("Diff changed", ["markup.changed"], p.warm),
    rule("Invalid and deprecated", [
      "invalid",
      "invalid.illegal",
      "invalid.deprecated"
    ], p.danger, "underline")
  ];
}

function makeSemanticTokenColors(p) {
  const keyword = p.keyword || p.accentAlt;
  const property = p.property || p.fgSoft;
  const propertyReadonly = p.propertyReadonly || p.secondary;
  return {
    "namespace": p.accent,
    "type": p.warm,
    "type.defaultLibrary": p.secondary,
    "class": p.warm,
    "class.defaultLibrary": p.secondary,
    "enum": p.warm,
    "interface": p.warm,
    "struct": p.warm,
    "typeParameter": p.secondary,
    "parameter": p.fgSoft,
    "variable": p.fg,
    "variable.readonly": p.secondary,
    "variable.defaultLibrary": p.secondary,
    "property": property,
    "property.readonly": propertyReadonly,
    "enumMember": p.secondary,
    "event": p.danger,
    "function": p.accentBright,
    "function.defaultLibrary": p.secondary,
    "method": p.accentBright,
    "method.defaultLibrary": p.secondary,
    "macro": p.danger,
    "keyword": keyword,
    "modifier": keyword,
    "comment": { foreground: p.muted, italic: true },
    "string": p.tertiary,
    "number": p.warm,
    "regexp": p.danger,
    "operator": p.fgSoft,
    "decorator": { foreground: p.danger, italic: true },
    "*.static": { foreground: p.secondary },
    "*.async": { foreground: p.accentBright, italic: true },
    "*.deprecated": { foreground: p.mutedDeep, underline: true },
    "variable.readonly:javascript": p.secondary,
    "variable.readonly:typescript": p.secondary,
    "property.readonly:javascript": propertyReadonly,
    "property.readonly:typescript": propertyReadonly,
    "function:python": p.accentBright,
    "parameter:python": p.fgSoft,
    "class:python": p.warm
  };
}

function removeBoldStyles(theme) {
  for (const token of theme.tokenColors) {
    const fontStyle = token.settings && token.settings.fontStyle;
    if (!fontStyle) continue;
    const next = fontStyle
      .split(/\s+/)
      .filter((style) => style && style !== "bold")
      .join(" ");
    if (next) {
      token.settings.fontStyle = next;
    } else {
      delete token.settings.fontStyle;
    }
  }

  for (const value of Object.values(theme.semanticTokenColors)) {
    if (value && typeof value === "object" && value.bold) delete value.bold;
  }
}

function removeItalicStyles(theme) {
  for (const token of theme.tokenColors) {
    const fontStyle = token.settings && token.settings.fontStyle;
    if (!fontStyle) continue;
    const next = fontStyle
      .split(/\s+/)
      .filter((style) => style && style !== "italic")
      .join(" ");
    if (next) {
      token.settings.fontStyle = next;
    } else {
      delete token.settings.fontStyle;
    }
  }

  for (const value of Object.values(theme.semanticTokenColors)) {
    if (value && typeof value === "object" && value.italic) delete value.italic;
  }
}

function themeFor(p) {
  const theme = {
    name: p.name,
    type: "dark",
    semanticHighlighting: true,
    colors: makeWorkbench(p),
    tokenColors: makeTokenColors(p),
    semanticTokenColors: makeSemanticTokenColors(p)
  };
  if (p.noBold) removeBoldStyles(theme);
  if (p.noItalics) removeItalicStyles(theme);
  return theme;
}

function relativeLuminance(hex) {
  const rgb = hex.slice(1, 7).match(/../g).map((part) => parseInt(part, 16) / 255);
  const [r, g, b] = rgb.map((channel) => {
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a, b) {
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function assertReadable(theme) {
  const background = theme.colors["editor.background"];
  const failures = [];
  for (const token of theme.tokenColors) {
    const foreground = token.settings && token.settings.foreground;
    if (!foreground || !/^#[0-9a-fA-F]{6}$/.test(foreground)) continue;
    const ratio = contrastRatio(foreground, background);
    if (ratio < 4.5) failures.push(`${theme.name}: ${token.name} ${foreground} is ${ratio.toFixed(2)}:1`);
  }
  if (failures.length) throw new Error(`Token contrast check failed:\n${failures.join("\n")}`);
}

let changed = false;

for (const palette of palettes) {
  const theme = themeFor(palette);
  assertReadable(theme);

  const file = path.join(root, palette.file);
  const next = `${JSON.stringify(theme, null, 2)}\n`;

  if (checkOnly) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
    if (current !== next) {
      changed = true;
      console.error(`${palette.file} is out of date. Run npm run build.`);
    }
  } else {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, next);
    console.log(`Wrote ${palette.file}`);
  }
}

if (checkOnly && changed) process.exit(1);
if (checkOnly) console.log("Theme files are generated and readable.");
