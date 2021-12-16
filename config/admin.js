module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6343ec8c15da3dd179390a8c7c710233'),
  },
});
