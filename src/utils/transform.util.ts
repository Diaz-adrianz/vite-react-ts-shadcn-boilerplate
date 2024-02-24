export default {
  transform: {
    objectToQueryParams(query: any) {
      let queries: string[] = [];

      Object.keys(query).forEach((key) => {
        if (query[key] != undefined) queries.push(`${key}=${query[key]}`);
      });

      return queries.join('&');
    },
  },
};
