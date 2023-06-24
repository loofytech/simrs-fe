export const formatIDR = (param: string | number, prefix?: string) => {
  const format = param.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

  return prefix ? prefix + format : format;
}