function answer() {
    var amount_input = parseInt(document.getElementById('amount').value);
    var rate_input = parseInt(document.getElementById('rate').value);
    var time_input = parseInt(document.getElementById('time').value);

    const error = document.querySelector('.error');
    const result = document.querySelector('.result');

    if (!amount_input || !rate_input || !time_input) {
      result.innerHTML = '';
      error.style.display = 'block';
      setTimeout(() => (error.style.display = 'none'), 1000);
      return; // if error occur it will return nothing so that the code line will stop here and won go below
    }

    var interest = (amount_input * rate_input * time_input) / 100;

    var total = interest + amount_input;

    result.innerHTML = `
    <p class="output_text">Principal Amount: <span id="output_1"> ${amount_input} </span></p>
        <p class="output_text">Total Intrest: <span id="output_2">${interest}</span></p>
        <p class="output_text">Total Value: <span id="output_3"> ${total} </span></p>
    `; // sting leteral vanin xa yeslai

    event.preventDefault(); // as this is form so it will stop from having default behaviour or simply it the page will stop refreshing after the button is clicked
  }