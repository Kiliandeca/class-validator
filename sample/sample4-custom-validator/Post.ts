import {Validate} from "../../src/decorator/decorators";
import {CustomTextLength} from "./CustomTextLength";

export class Post {

    @Validate(CustomTextLength, {
        message: "Wrong post title"
    })
    title: string;

}