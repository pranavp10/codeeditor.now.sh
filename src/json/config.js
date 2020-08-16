const config = `{
    "workbench.colorTheme": "Dracula",
    "editor.renderLineHighlight": "line",
    "editor.renderWhitespace": "all",
    "window.zoomLevel": 2,
    "editor.renderIndentGuides": false,
    "workbench.iconTheme": "vscode-icons",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "editor.fontFamily": "Hasklig, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.fontSize": 15,
    "editor.cursorBlinking": "phase",
    "editor.cursorSmoothCaretAnimation": true,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "files.insertFinalNewline": true,
    "files.trimTrailingWhitespace": true,
    "telemetry.enableCrashReporter": false,
    "workbench.settings.enableNaturalLanguageSearch": false,
    "editor.formatOnPaste": true,
    "telemetry.enableTelemetry": false,
    "workbench.editor.highlightModifiedTabs": true,
    "editor.detectIndentation": true,
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.cursorStyle": "line",
    "editor.cursorWidth": 4,
    "workbench.colorCustomizations": {
        "editorCursor.foreground": "#ffff00",
        "terminalCursor.foreground": "#ffff00",
        "editor.lineHighlightBackground": "#c8bdbd2d"
    },
    "importCost.showCalculatingDecoration": true,
    "editor.formatOnSave": true,
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "[javascriptreact]": {
        "editor.formatOnSave": true
    },
    // tell the ESLint plugin to run on save
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "workbench.startupEditor": "newUntitledFile",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "cSpell.userWords": [
        "Checkmark",
        "Formik",
        "Onboarded",
        "deduping",
        "favicons",
        "globby",
        "prettierrc"
    ],
    "kite.showWelcomeNotificationOnStartup": false,
    "files.associations": {
        "*.md": "mdx"
    },
    "gitlens.gitCommands.closeOnFocusOut": true,
    "editor.renameOnType": true,
}`;
export { config };
