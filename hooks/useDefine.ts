export default function useDefine() {
  return {
    plugin: __FROM_PLUGIN__,
    window: __FROM_WINDOW__,
    NODE_ENV: process.env.NODE_ENV,
  };
}
