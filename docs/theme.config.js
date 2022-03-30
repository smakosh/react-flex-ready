export default {
  github: "https://github.com/smakosh/react-flex-ready",
  docsRepositoryBase:
    "https://github.com/smakosh/react-flex-ready/blob/master/pages",
  branch: "master",
  path: "/",
  titleSuffix: " – React Flex Ready",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: false,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Smakosh`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        React Flex Ready
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A Flexbox grid ready, easy to implement and customize
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="React-flex-ready: A Flexbox grid ready, easy to implement and customize"
      />
      <meta
        name="og:title"
        content="React-flex-ready: A Flexbox grid ready, easy to implement and customize"
      />
    </>
  ),
};
