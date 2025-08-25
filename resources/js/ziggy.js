const Ziggy = {"url":"https:\/\/simone-bianco-curriculum.test","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"telescope":{"uri":"telescope\/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"},"parameters":["view"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"resume":{"uri":"resume","methods":["GET","HEAD"]},"thesis":{"uri":"thesis","methods":["GET","HEAD"]},"tenant.language.update":{"uri":"settings\/language","methods":["POST"]},"tenant.theme.update":{"uri":"settings\/theme","methods":["POST"]},"chat":{"uri":"chat","methods":["POST"]},"test":{"uri":"test","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
