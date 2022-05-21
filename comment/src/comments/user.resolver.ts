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

@Resolver('User')
export class UsersResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @ResolveField('comments')
  getUser(@Parent() comment: any) {
    console.log('Xd');
    return { __typename: 'User', id: comment.user.id };
  }
}
