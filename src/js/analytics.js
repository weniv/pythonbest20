const BASE_URL = 'https://www.analytics.weniv.co.kr';

//------------------------------------------------------------
// @post /collect/pageview
function collectPageView(session_id) {
  const header = {
    'Content-Type': 'application/json',
  };
  const payload = {
    url: window.location.href,
  };

  if (session_id) {
    header['Session-Id'] = session_id;
    payload.session_id = session_id;
  }

  fetch(`${BASE_URL}/collect/pageview`, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      if (!session_id) {
        localStorage.setItem('session_id', data.session_id);
      }
    })
    .catch((error) => console.error('Error:', error));
}
window.addEventListener('load', (e) => {
  const session_id = localStorage.getItem('session_id');
  const lastPage = localStorage.getItem('lastPage');

  if (lastPage !== window.location.pathname) {
    collectPageView(session_id);
  }

  localStorage.setItem('lastPage', window.location.pathname);
});

//------------------------------------------------------------
// @post /collect/anchor-click
async function collectAnchorClick(event, type) {
  event.preventDefault(); // 기본 동작 막기

  const ANCHOR = event.currentTarget;

  const session_id = localStorage.getItem('session_id');

  const source_url = window.location.href;
  const target_url = ANCHOR.href;
  const target_tar = ANCHOR.target || '_self';

  try {
    const response = await fetch(`${BASE_URL}/collect/anchor-click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Session-Id': session_id,
      },
      body: JSON.stringify({ source_url, target_url, type }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    window.open(target_url, target_tar);
  }
}

// 외부 링크
document.querySelectorAll('.kebab-list a').forEach((anchor) => {
  anchor.addEventListener('click', (event) =>
    collectAnchorClick(event, `교육서비스:${anchor.innerText}`),
  );
});

//------------------------------------------------------------
// @post /collect/sql
function collectSQL() {
  const session_id = localStorage.getItem('session_id');
  const contents = window.editor.getValue();
  fetch(`${BASE_URL}/collect/sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Session-Id': session_id,
    },
    body: JSON.stringify({ contents }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch((error) => console.error('Error:', error));
}
