import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

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

    @CreateDateColumn()
    createdAt: Date;
}