var emails = ['ciao@ciao.it', 'info@info.it', 'admin@admin.it', 'marcopa84@hotmail.it'];

var inputEmail = prompt('Inserisci la tua Mail');
console.log(inputEmail);

var message = ('NON SEI AUTORIZZATO AD ENTRARE');

for (var i = 0; i < emails.length; i++){
  console.log(emails);
  var email = emails[i]
  if (inputEmail == email){
    message = ('EMAIL AUTORIZZATA AD ENTRARE');
  }
};

console.log(message);
