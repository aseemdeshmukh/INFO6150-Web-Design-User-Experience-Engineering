$(document).ready(() => {
  $('#add').click(() => {
    const num1 = $('#num1').val();
    const num2 = $('#num2').val();
    const result = +num1 + +num2;
    $('#result').text(`Result: ${result}`);
  });

  $('#subtract').click(() => {
    const num1 = $('#num1').val();
    const num2 = $('#num2').val();
    const result = +num1 - +num2;
    $('#result').text(`Result: ${result}`);
  });

  $('#multiply').click(() => {
    const num1 = $('#num1').val();
    const num2 = $('#num2').val();
    const result = +num1 * +num2;
    $('#result').text(`Result: ${result}`);
  });

  $('#divide').click(() => {
    const num1 = $('#num1').val();
    const num2 = $('#num2').val();
    const result = +num1 / +num2;
    $('#result').text(`Result: ${result}`);
  });
});
