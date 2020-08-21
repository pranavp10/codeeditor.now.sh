const config = `{
  "workbench.colorTheme": "Dracula",
  "editor.renderLineHighlight": "line",
  "editor.renderWhitespace": "all",
  "window.zoomLevel": 2,
  "editor.renderIndentGuides": false,
  "workbench.iconTheme": "vscode-icons",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "editor.fontFamily": "Operator Mono,'Fira Code', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontWeight": "400",
  "editor.lineHeight": 25,
  "prettier.eslintIntegration": true,
  "editor.letterSpacing": 0.5,
  "editor.fontSize": 17,
  "editor.cursorBlinking": "solid",
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
  "editor.cursorWidth": 5,
  "workbench.colorCustomizations": {
    "editorCursor.foreground": "#ffff00",
    "terminalCursor.foreground": "#ffff00",
    "editor.lineHighlightBackground": "#c8bdbd2d"
  },

  "importCost.showCalculatingDecoration": true,
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "workbench.startupEditor": "newUntitledFile",
  "launch": {},
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
  "editor.largeFileOptimizations": false,
  "sync.autoDownload": false,
  "auto-rename-tag.activationOnLanguage": [
    "*"
  ],
  "sync.gist": "0f8ef2730499efee297b796b310e9b44"
}
`;
export { config };
