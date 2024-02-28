export default {
  transform: {
    objectToQueryParams(query: any) {
      const queries: string[] = [];

      Object.keys(query).forEach((key) => {
        if (query[key] != undefined) queries.push(`${key}=${query[key]}`);
      });

      return queries.join('&');
    },
  },
};
