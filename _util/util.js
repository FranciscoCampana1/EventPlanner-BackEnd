const getPagesFromCountLimit = (count, limit) => Math.round(count / limit);
const normalizePage = (page, max) => {
   page = +page || 1;

   if (page < 1) page = 1;
   else if (page > max) page = max;

   return page;
};

module.exports = {
   getPagesFromCountLimit,
   normalizePage,
};
