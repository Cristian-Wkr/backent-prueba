import { DataSource } from "typeorm";
import { User } from "./entities/users";


 export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "atlasBD",
    entities: [User],
    logging: true,
    synchronize:true
})