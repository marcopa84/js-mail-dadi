var emails = ['ciao@ciao.it', 'info@info.it', 'admin@admin.it', 'marcopa84@hotmail.it'];

var inputEmail = prompt('Inserisci la tua Mail');
console.log(inputEmail);

var message = ('NON SEI AUTORIZZATO AD ENTRARE');

for (var i = 0; i < emails.length; i++){
  var email = emails[i]
  console.log(email);
  if (inputEmail == email){
    message = ('EMAIL AUTORIZZATA AD ENTRARE');
  }
};

console.log(message);
