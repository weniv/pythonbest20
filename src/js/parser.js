// 코드가 가독성과 재사용성이 떨어져 리뉴얼이 필요함
// https://codepen.io/kvendrik/pen/bGKeEE 코드로 리뉴얼할 예정
const normalize = (markdown) => {
  return markdown
    .replace(/\r\n?/g, '\n')
    .replace(/\n{2,}/g, '\n\n')
    .split('\n');
};

const parse = (token, { regex, tagName, replace }) => {
  return token.replace(regex, replace ?? `<${tagName}>$1</${tagName}>`);
};

const codeBlockStart = {
  regex: /^\s*`{3}(.+)/,
  replace:
    '<pre class="que-pre"><code>$1',
};

const codeBlockEnd = {
  regex: /(.*)`{3}\s*$/,
  replace: '$1</code></pre>',
};

const unorderedListItem = {
  regex: /^\s*-\s(.+)/,
  replace: '<li class="que-ul-li">$1',
};

const orderedListItem = {
  regex: /^\s*(\d+\.\s)(.+)/,
  replace: '<li class="que-ol-li">$2',
  // 정규표현식
};

const tableRow = {
  regex: /^\|(.+)\|$/,
  replace: (_, group) => {
    const heads = group
      .split('|')
      .map((text) => `<td>${text.trim()}</td>`)
      .join('');
    return `<tr>${heads}</tr>`;
  },
};

const tableDivision = {
  regex: /^\|(([-|]|\s)+)\|$/,
  replace: '',
};


const blockquote = {
  regex: /^\s*"\s(.+)/,
  replace: '<blockquote class="que-blockquote">$1</blockquote>',
};

const heading = {
  regex: /^\s*(#+)\s(.+)/,
  replace: (_, mark, group) => {
    const tagName = `h${mark.length + 1}`;

    if (mark.length == 1) {
      return `<${tagName} class="que-tit1" id="${group.replace(
        /(\*{2})|`/g,
        ''
      )}">${group}</${tagName}>`;
    } else if (mark.length == 2) {
      return `<${tagName} class="que-tit2" id="${group.replace(
        /(\*{2})|`/g,
        ''
      )}">${group}</${tagName}>`;
    } else if (mark.length == 3) {
      return `<${tagName} class="que-tit3" id="${group.replace(
        /(\*{2})|`/g,
        ''
      )}">${group}</${tagName}>`;
    }
    return `<${tagName} class="que-tit4" id="${group.replace(
      /(\*{2})|`/g,
      ''
    )}">${group}</${tagName}>`;
  },
};

const figure = {
  regex: /^\s*!\[(.*)\]\((.+)\)/,
  replace: (_, g1, g2) => {
    const width = g2.match(/_{2}(\d+)\..+$/)?.[1];
    // console.log(g2)
    return `<figure class="que-figure"><img class="que-img" src="${window.location.origin}/src/pages/img/${g2}"${width ? ` style="width: ${width}px;"` : ''
      } alt="">${g1 ? `<figcaption>${g1}</figcaption>` : ''}</figure>`;
  },
};

const lineBreak = {
  regex: /^<br\s*\/>$/,
  replace: '<br />',
};

const hrline = {
  regex: /---/,
  replace: '<hr class="que-hr" />',
};

const paragraph = {
  regex: /(?:^|\n)(.+)$/,
  tagName: 'p',
  replace: (matched, group) =>
    /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img|code)/.test(matched)
      ? matched
      : '<p class="que-p">' + group + '</p>',
};

const link = {
  regex: /\[(.+)\]\((.+)\)/g,
  replace: '<a class="que-a" href="$2">$1</a>',
};

const strong = {
  regex: /\*{2}(([^*])+)\*{2}/g,
  tagName: 'strong',
};

const code = {
  regex: /`([^`]+)`/g,
  tagName: 'code',
};

const listDepth = (token) => {
  const indentation = token.match(/^\s*(?=-|(\d+\.))/)[0].length;
  return indentation % 2 ? indentation - 1 : indentation;
};

const encodeEntity = (token) => {
  return token
    .replace(/<br\s*\/>/g, '&br /&')
    .replaceAll('<', '&#60;')
    .replaceAll('>', '&#62;')
    .replaceAll('&br /&', '<br />');
};

const encodeCodeEntity = (token) => {
  let keyword_syntex = ['def', 'if', 'else', 'for', 'while', 'in', 'return', 'None'];
  let keyword_builtinfunction = ['abs', 'aiter', 'all', 'any', 'anext', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']

  keyword_syntex.forEach(key => {
    const re = new RegExp(`(.*?)${key}[ ?(]+(.*?)`);
    token = token.replace(re, `$1<span class="code-syntex";>${key} </span>$2`)
  });

  keyword_builtinfunction.forEach(key => {
    const re = new RegExp(`(.*?) ${key}[ (]+(.*?)`);
    token = token.replace(re, `$1<span class="code-builtinfunction";> ${key}</span>($2`)
  });

  const re = new RegExp(`(.*?)'(.*?)'(.*?)`, 'g');
  token = token.replace(re, `$1<span class="code-text";>'$2'</span>$3`)


  return token
};

const blockRules = [
  codeBlockStart,
  unorderedListItem,
  orderedListItem,
  tableDivision,
  tableRow,
  heading,
  figure,
  lineBreak,
  hrline,
  blockquote,
];

const inlineRules = [link, strong, code];

const parseMarkdown = (markdown) => {
  const tokens = normalize(markdown);
  let isEditor = false;
  let codeBlockStartIndex = -1;
  let tableStartIndex = -1;
  let curListDepth = -1;
  const listStack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    // 코드 블럭이 아닐 때
    if (codeBlockStartIndex === -1) {
      const rule =
        blockRules.find(({ regex }) => regex.test(token)) ?? paragraph;
      tokens[i] = parse(encodeEntity(token), rule);
      switch (rule) {
        case codeBlockStart:
          codeBlockStartIndex = i;
          const codeType = tokens[i].match(/<code>(.+)$/)?.[1];
          if (codeType === 'editor') {
            isEditor = true;
            tokens[i] = '';
          } else {
            tokens[i] = tokens[i].replace(codeType, '');
          }
          break;

        case unorderedListItem:
        case orderedListItem:
          const tagName = rule === unorderedListItem ? 'ul' : 'ol';
          const depth = listDepth(token);
          if (depth > curListDepth) {
            tokens[i] = `<${tagName} class='que-list'>` + tokens[i];
            // console.log('tokens:',tokens[i])
            listStack.push(`</${tagName}>`);
          } else if (depth < curListDepth) {
            let depthDiff = (curListDepth - depth) / 2;
            while (depthDiff) {
              const tag = listStack.pop();
              // console.log(depthDiff);
              // console.log(tag);
              tokens[i - 1] += tag;
              if (tag === `</${tagName}>`) {
                depthDiff--;
              }
            }
            tokens[i - 1] += listStack.pop();
          } else {
            tokens[i - 1] += listStack.pop();
          }
          curListDepth = depth;
          listStack.push('</li>');
          break;

        case tableRow:
          if (tableStartIndex === -1) {
            tableStartIndex = i;
            tokens[i] = '<table class="que-table">' + tokens[i].replace(/(\<\/?)td>/g, '$1th>');
          }
          break;

        default:
          if (token.trim() === '') {
            if (listStack.length) {
              while (listStack.length) {
                tokens[i - 1] += listStack.pop();
              }
              curListDepth = -1;
            }

            if (tableStartIndex >= 0) {
              tokens[i - 1] += '</table>';
              tableStartIndex = -1;
            }

            isEditor = false;
          }
      }
      // 코드 블럭일 때
    } else {
      if (token.trim() === '') {
        tokens[i] = '\n\n';
      }
      if (!isEditor) {
        // console.log(tokens[i]);
        // console.log(token)
        tokens[i] = encodeCodeEntity(token);
      }
      if (codeBlockEnd.regex.test(token)) {
        tokens[i] = parse(token, codeBlockEnd);
        // console.log(token) //```
        // console.log(tokens[i]); //</code></pre>
        codeBlockStartIndex = -1;
        isEditor = false;
      } else {
        tokens[i] += '\n';
      }
    }
  }

  tokens.forEach((_, index) => {
    inlineRules.forEach((rule) => {
      if (rule.regex.test(tokens[index])) {
        tokens[index] = parse(tokens[index], rule);
      }
    });
  });

  return tokens.filter(Boolean);
};

const fetchMarkdown = async () => {
  if (window.location.pathname.split('/')[1] === '' || window.location.pathname.split('/')[1] === 'index.html') {
    // 로컬 테스트 및 실제 배포
    const res = await fetch(
      `${window.location.origin}/src/pages/question${PAGE_NAME}.md`
    );

    if (res.status == 200) {
      const markdown = await res.text();
      return markdown;
    } else {
      const markdown = '# 알고리즘 문제가 없습니다.'
      return markdown;
    }

  } else {
    // github page url로 배포
    const res = await fetch(
      `${window.location.origin}/${window.location.pathname.split('/')[1]}/src/pages/question${PAGE_NAME}.md`
    );

    if (res.status == 200) {
      const markdown = await res.text();
      return markdown;
    } else {
      const markdown = '# 알고리즘 문제가 없습니다.'
      return markdown;
    }

  }
};

const renderContent = (html) => {
  const div = document.querySelector(`.description`);
  const innerHTML = [...html];
  // console.log(html);
  let isFirst = true;
  innerHTML.forEach((token, index) => {
    if (/^<h\d+/.test(token) && token.match(/^<h(\d+)/)[1] === '2') {
      if (isFirst) {
        innerHTML[index] = '<article class="que-article">' + token;
        isFirst = false;
      } else {
        innerHTML[index - 1] += '</article>';
        innerHTML[index] = '<article class="que-article-sec">' + token;
      }
    }
    if (index === innerHTML.length - 1) {
      innerHTML[index] += '</article>';
    }
  });
  div.innerHTML = innerHTML.join('');
};

const deleteDivisionLine = () => {
  document
    .querySelectorAll(`.cont-${PAGE_NAME} h3, cont-${PAGE_NAME} h4`)
    .forEach((elem) => {
      const sibling = elem.nextElementSibling;
      if (sibling && (sibling.tagName === 'H3' || sibling.tagName === 'H4')) {
        elem.classList.add('no-border');
      }
    });
};

const deleteLineBreak = () => {
  document.querySelectorAll(`.cont-${PAGE_NAME} p`).forEach((elem) => {
    const parent = elem.parentElement;
    const sibling = elem.nextElementSibling;
    if (sibling?.tagName === 'BR') {
      elem.classList.add('margin-bottom');
      parent.removeChild(sibling);
    }
  });
};

const modifyStyle = () => {
  deleteDivisionLine();
  deleteLineBreak();
};

const render = async () => {
  const markdown = await fetchMarkdown();
  const html = parseMarkdown(markdown);
  renderContent(html);
  modifyStyle();
  window.dispatchEvent(new Event('markdownParsed'));
};

render();

const isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

const isSafari = navigator.userAgent.toLowerCase();

if (isChrome || iOS || isSafari.indexOf('safari') != -1) {
  window.addEventListener('markdownParsed', () => {
    const hash = window.location.hash;
    window.location.hash = '';
    window.location.hash = hash;
  });
}
