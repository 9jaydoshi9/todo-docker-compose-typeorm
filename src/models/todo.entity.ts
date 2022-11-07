import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('Task')
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column("text")
    description: string
}