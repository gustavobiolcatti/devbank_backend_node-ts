import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import Account from "./Account";

@Entity()
export default class Operation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "integer",
        primary: true
    })
    sender: number;

    @Column({
        type: "integer",
        primary: true
    })
    receiver: number;

    @Column({
        type: 'numeric',
    })
    value: number;

    @ManyToMany(type => Account)
    @JoinColumn()
    accounts: Account;

    @CreateDateColumn()
    createdAt: Date;
}