const hamburger = document.getElementById('hamburger-btn');
const btn = document.getElementById('btn');
const ham_menu = document.getElementById('nav__menu');
const no_scroll = document.getElementById('no_scroll');

hamburger.addEventListener('click', () => {
  btn.classList.toggle('close');
  ham_menu.classList.toggle('add-menu-sp');
  no_scroll.classList.toggle('no_scroll');
});

// upmove_uper
{
  let splitText = document.getElementsByClassName('upmove_uper');
  let arraySplitText = [...splitText];
  let text;
  let newText;
  let spanText;

  const unEscapeHTML = (str) => {
    return str
      .replace(/(&lt;)/g, '<')
      .replace(/(&gt;)/g, '>')
      .replace(/(&quot;)/g, '"')
      .replace(/(&#39;)/g, "'")
      .replace(/(&amp;)/g, '&');
  };

  arraySplitText.forEach((element) => {
    newText = '';
    spanText = element;
    text = unEscapeHTML(element.innerHTML);
    text.split('').forEach((element) => {
      // 文字列に空白（スペース）がある場合
      if (element == ' ') {
        newText += '<span>&nbsp;</span>';
      } else {
        newText += '<span>' + element + '</span>';
      }
    });
    spanText.innerHTML = newText;
  });
}
// upmove_lower
{
  let splitText = document.getElementsByClassName('upmove_lower');
  let arraySplitText = [...splitText];
  let text;
  let newText;
  let spanText;

  const unEscapeHTML = (str) => {
    return str
      .replace(/(&lt;)/g, '<')
      .replace(/(&gt;)/g, '>')
      .replace(/(&quot;)/g, '"')
      .replace(/(&#39;)/g, "'")
      .replace(/(&amp;)/g, '&');
  };

  arraySplitText.forEach((element) => {
    newText = '';
    spanText = element;
    text = unEscapeHTML(element.innerHTML);
    text.split('').forEach((element) => {
      // 文字列に空白（スペース）がある場合
      if (element == ' ') {
        newText += '<span>&nbsp;</span>';
      } else {
        newText += '<span>' + element + '</span>';
      }
    });
    spanText.innerHTML = newText;
  });
}
