// adding ts support for module.scss files
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}
