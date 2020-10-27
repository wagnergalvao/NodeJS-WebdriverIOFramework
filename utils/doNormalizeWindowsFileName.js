exports.doNormalizeWindowsFileName = (text) => text.normalize('NFD').replace(/[^a-zA-Z\u00C0-\u024F\ \^\&\‘\@\{\}\[\]\,\$\=\!\–\#\(\)\%\.\+\~\_]/g, "");
