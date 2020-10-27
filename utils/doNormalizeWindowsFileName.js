exports.doNormalizeWindowsFileName = (text) => text
  .normalize('NFD')
  .replace(/[^a-zA-Z0-9\u00C0-\u024F\ \^\&\‘\@\{\}\[\]\,\$\=\!\–\#\(\)\%\.\+\~\_]/g, "")
  .replace(/ /g, '_');