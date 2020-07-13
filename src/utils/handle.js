/**
 * Pass req and res to provided handler if method
 * matches. Otherwise, return a 404
 */
export default function (methods) {
  return (req, res) => {
    const handler = methods[req.method];
    return handler ? handler(req, res) : res.status(404).end();
  };
}
