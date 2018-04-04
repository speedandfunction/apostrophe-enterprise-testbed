module.exports = {
  main: require('./main'),
  login: require('./login'),
  switchToDraftMode: require('./switchToDraftMode'),
  switchToLiveMode: require('./switchToLiveMode'),
  switchLocale: require('./switchLocale'),
  makeSubPage: require('./makeSubPage'),
  submitChanges: require('./submitChanges'),
  checkSubmitted: require('./checkSubmitted'),
  confirm404ByRelativeUrl: require('./confirm404ByRelativeUrl'),
  confirm200ByRelativeUrl: require('./confirm200ByRelativeUrl'),
  navigateToRelativeUrl: require('./navigateToRelativeUrl'),
  navigateToRelativeUrlAndconfirm404: require('./navigateToRelativeUrlAndconfirm404'),
  navigateToPage: require('./navigateToPage'),
  navigateToHome: require('./navigateToHome'),
  commit: require('./commit'),
  commitAndExport: require('./commitAndExport'),
  addTextWidgetToPage: require('./addTextWidgetToPage'),
  checkNotification: require('./checkNotification'),
  createArticle: require('./createArticle'),
  forceExportCurrentPageFor: require('./forceExportCurrentPageFor'),
};
