import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    OneToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import User from "./User";

@Entity()
export default class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        default: 1234
    })
    agency: number;

    @PrimaryGeneratedColumn('increment')
    accountNumber: number;

    @Column({
        default: 0,
        nullable: false,
    })
    balance: number;

    @OneToOne(type => User, account => Account)
    user: User;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date
}