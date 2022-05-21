import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver('Comment')
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation('createComment')
  create(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentsService.create(createCommentInput);
  }

  @Query('comments')
  findAll() {
    return this.commentsService.findAll();
  }

  @Query('comment')
  async findOne(@Args('id') id: string) {
    let comment = await this.commentsService.findOne(id);
    return {
      id: comment.id,
      content: comment.content,
      user: { id: comment.user },
    };
  }

  @Mutation('updateComment')
  update(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentsService.update(
      updateCommentInput.id,
      updateCommentInput,
    );
  }

  @Mutation('removeComment')
  remove(@Args('id') id: number) {
    return this.commentsService.remove(id);
  }

  @ResolveField('user')
  getUser(@Parent() comment: any) {
    console.log(comment);
    return { __typename: 'User', id: comment.user.id , comment: [1] };
  }
}
