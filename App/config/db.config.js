module.exports = {

  HOST: "ep-tiny-heart-aqfrahlh-pooler.c-8.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_5VzYHt9KpiPj",
  DB: "neondb",
  dialect: "postgresql",
  pool:
  
  {
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
};