import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Algorithm {
    @Prop()
    name:string

    @Prop()
    description:string

    @Prop()
    imageURL:string
}

export const AlgorithmSchema = SchemaFactory.createForClass(Algorithm)