const PageScroll = (element) => {
  const section = document.querySelector(element);
  if(document.body.contains(section)) {
      window.scrollTo(0, section.offsetTop);
  }
}

export default PageScroll;