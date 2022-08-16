import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import Account from "./Account";

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 250,
    })
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @OneToOne(
        type => Account, 
        user => User, 
        { 
            cascade: true, 
            eager: true,
            onDelete: "CASCADE",
            
        })
    @JoinColumn()
    account: Account;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date
}