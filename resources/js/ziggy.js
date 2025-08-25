const Ziggy = {"url":"https:\/\/simone-bianco-curriculum.test","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"telescope":{"uri":"telescope\/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"},"parameters":["view"]},"stancl.tenancy.asset":{"uri":"tenancy\/assets\/{path?}","methods":["GET","HEAD"],"wheres":{"path":"(.*)"},"parameters":["path"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"projects":{"uri":"projects","methods":["GET","HEAD"]},"resume":{"uri":"resume","methods":["GET","HEAD"]},"tenant.language.update":{"uri":"settings\/language","methods":["POST"]},"tenant.theme.update":{"uri":"settings\/theme","methods":["POST"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
