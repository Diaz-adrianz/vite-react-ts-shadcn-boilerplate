export default {
  text: {
    findString(string: string, keyword: string) {
      const result = string.search(keyword);
      let res = false;
      if (result < 0) res = false;
      else res = true;
      return res;
    },
    replace(target: string, replace: string, str: string) {
      const string = '' + str;
      const regex = new RegExp(target, 'g');
      return string.replace(regex, replace);
    },
    random(len: number) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    delStr(str: string, fromRight = 1) {
      return str.substr(0, str.length - fromRight);
    },
    capitalize(string: string) {
      return string.replace(/\b\w/g, (str) => str.toUpperCase());
    },
    formatCamelCase(text: string, withS = true) {
      let res = text.replace(/[A-Z]/g, (str) => `-${str.toLowerCase()}`);
      res = `${res.substring(1)}${withS ? 's' : ''}`;
      return res;
    },
    base64(str: string, type: string) {
      if (type === 'enc') return btoa(str);
      else return atob(str);
    },
    getFirstChar(str: string) {
      return str.charAt(0);
    },
    removeHTMLTags(str: string) {
      return str.replace(/<[^>]+>/g, '');
    },
    trim(str: string, end: number = 10, start: number = 0) {
      return str.substring(start, end);
    },
  },
};
