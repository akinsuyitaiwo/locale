import {Model, DataTypes, UUIDV4   } from "sequelize"
import sequelize from "../config/database"

export default class User extends Model {
    public id!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public address!: string;
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: 'users',
    timestamps: true

})