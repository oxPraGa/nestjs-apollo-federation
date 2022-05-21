import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private userModel: Model<CommentDocument>,
  ) {}

  create(createCommentInput: CreateCommentInput) {
    const createComment = new this.userModel(createCommentInput);
    return createComment.save();
  }

  findOne(id: string) : any{
    return this.userModel.findById(id);
  }

  findAll(){

  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
