import { AppDataSource } from "./dataSource";


const dbConnectMysql = async () => {
    await AppDataSource.initialize();
  try {
    console.log("Connected to MySQL database");
  } catch (error) {
    console.log("Error connecting to MySQL database", error);
  }
};

export default dbConnectMysql;