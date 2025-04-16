import mysql from "mysql2/promise";

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
    });

    console.log("MySQL Connected:", connection.config.host);
    return connection; // You can export this or pass it to where needed
  } catch (error) {
    console.error("MySQL connection error:", error.message);
    process.exit(1);
  }
};
