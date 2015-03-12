Accounts.ui.config({
  requestPermissions: {
    github: ['user', 'repo']
  },
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Accounts.config({
  sendVerificationEmail:true
});
