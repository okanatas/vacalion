function switchVisible() {
    if (document.getElementById('register-form')) {

        if (document.getElementById('register-form').style.display == 'none') {
            document.getElementById('register-form').style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        }
        else {
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }
    }
}

  function start() {
    switchVisible();
  }
  window.onload = start;