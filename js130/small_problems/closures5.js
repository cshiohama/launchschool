const Account = {
  init(email, password, firstName, lastName) {
    function anonymize() {
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
      let result = '';
    
      for (let i = 0 ; i < 16 ; i++)
        result += str[Math.floor(Math.random() * 36)];
    
      return result;
    }
    
    function validPassword(pass) {
      return password === pass;
    }
    
    return {
      displayName: anonymize(),
      
      reanonymize(pass) {
        if (validPassword(pass)) {
          this.displayName = anonymize(); 
          return `display name changed to ${this.displayName}`;
        } else
          return 'Invalid Password';
      },
      
      resetPassword(pass, newPass) {
        if (validPassword(pass)) {
          password = newPass;
          return `password reset`;
        } else
          return 'Invalid Password';
      },
      
      firstName(pass) {
        if (validPassword(pass)) {
          return firstName;  
        } else
          return 'Invalid Password';
      },
      
      lastName(pass) {
        if (validPassword(pass)) {
          return lastName;  
        } else
          return 'Invalid Password';
      },
      
      email(pass) {
        if (validPassword(pass)) {
          return email;  
        } else
          return 'Invalid Password';
      },
    };
  },
};


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(bazQux.firstName('123456'));           // logs 'baz' but should log foo.
console.log(bazQux.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'

console.log(fooBar.__proto__)

console.log(fooBar.displayName);
console.log(fooBar.displayName);

console.log(fooBar);


