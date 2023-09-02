const mode = () => {
  const linkTag = document.querySelector("link");
  linkTag.href.endsWith("styles.css")
    ? (linkTag.href = "darkStyles.css")
    : (linkTag.href = "styles.css");
};
const changeTitle = (element) => {
  document.querySelector("titleText").innerHTML = ":)";
};
