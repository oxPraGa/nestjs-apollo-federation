import { CreateCommentInput } from './create-comment.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCommentInput extends PartialType(CreateCommentInput) {
  id: number;
}
